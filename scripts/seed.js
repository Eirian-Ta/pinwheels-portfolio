const { db } = require("@vercel/postgres");
const {
  tagsByGroup,
  realWorldProjectsData,
  otherProjectsData,
} = require("../app/lib/placeholder-data.js");

async function seedTagGroups(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Drop the tag_groups table if it exists
    await client.sql`DROP TABLE IF EXISTS tag_groups`;

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS tag_groups (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    tag_group_name VARCHAR(255) NOT NULL
  );
`;

    console.log(`Created "tag_groups" table`);

    const insertedTagGroups = await Promise.all(
      tagsByGroup.map(
        (group) => client.sql`
        INSERT INTO tag_groups (tag_group_name)
        VALUES (${group.groupName})
        ON CONFLICT (id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedTagGroups.length} tag groups`);

    return {
      createTable,
      tagGroups: insertedTagGroups,
    };
  } catch (error) {
    console.error("Error seeding tag_groups:", error);
    throw error;
  }
}

async function seedTags(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    console.log(`Created "uuid-ossp" extension`);

    // Drop the tag_groups table if it exists
    await client.sql`DROP TABLE IF EXISTS tags`;

    await client.sql`
      CREATE TABLE IF NOT EXISTS tags (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        tag_name VARCHAR(100) NOT NULL,
        tag_group_id VARCHAR(255) NOT NULL
      )
    `;

    console.log(`Created "tags" table`);

    const insertedTags = await Promise.all(
      tagsByGroup.map(async (tagGroup) => {
        const q =
          "SELECT id FROM tag_groups WHERE tag_group_name = $tagGroup.groupName".replace(
            "$tagGroup.groupName",
            "'" + tagGroup.groupName + "'"
          );
        // console.log(q);

        const groupIDResult = await client.query(q);

        if (groupIDResult.rows.length === 0) {
          console.error(`No tag group found for ${tagGroup.groupName}`);
          return [];
        }

        const groupID = groupIDResult.rows[0].id;

        const insertions = tagGroup.tags.map(async (tag) => {
          await client.sql`
            INSERT INTO tags (tag_name, tag_group_id)
            VALUES (${tag}, ${groupID})
            ON CONFLICT (id) DO NOTHING
          `;
        });

        return Promise.all(insertions);
      })
    );

    console.log(`Seeded ${insertedTags.flat().length} tags`);

    return {
      tags: insertedTags.flat(),
    };
  } catch (error) {
    console.error("Error seeding tags:", error);
    throw error;
  }
}

async function seedProjectsTagsMapping(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS projects_tags_mapping (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        app_code VARCHAR(20) NOT NULL,
        tag_id VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "projects_tags_mapping" table`);

    const insertions = [];

    for (const project of [...realWorldProjectsData, ...otherProjectsData]) {
      const { appCode, tags } = project;

      for (const tagName of tags) {
        const q = "SELECT id FROM tags WHERE tag_name = $tagName".replace(
          "$tagName",
          "'" + tagName + "'"
        );
        // console.log(q);

        const tagIDResult = await client.query(q);

        const tagID = tagIDResult.rows[0].id;

        const insertion = client.sql`
          INSERT INTO projects_tags_mapping (app_code, tag_id)
          VALUES (${appCode}, ${tagID})
          ON CONFLICT (id) DO NOTHING;
        `;

        insertions.push(insertion);
      }
    }

    const insertedProjectTagPairs = await Promise.all(insertions);

    console.log(`Seeded ${insertedProjectTagPairs.length} project-tag pairs`);

    return {
      createTable,
      projectTagPairs: insertedProjectTagPairs,
    };
  } catch (error) {
    console.error("Error seeding projects-tags mapping:", error);
    throw error;
  }
}

async function seedProjectsUrlsMapping(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Drop the tag_groups table if it exists
    await client.sql`DROP TABLE IF EXISTS projects_urls_mapping`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS projects_urls_mapping (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        app_code VARCHAR(20) NOT NULL,
        link_type VARCHAR(20) NOT NULL,
        link_url VARCHAR(350) NOT NULL
      );
    `;

    console.log(`Created "projects_urls_mapping" table`);

    const insertions = [];

    for (const project of [...realWorldProjectsData, ...otherProjectsData]) {
      const { appCode, urls } = project;

      for (const link of urls) {
        const insertion = client.sql`
          INSERT INTO projects_urls_mapping (app_code, link_type, link_url)
          VALUES (${appCode}, ${link.type}, ${link.url})
          ON CONFLICT (id) DO NOTHING;
        `;

        insertions.push(insertion);
      }
    }

    const insertedProjectUrlPairs = await Promise.all(insertions);

    console.log(`Seeded ${insertedProjectUrlPairs.length} project-url pairs`);

    return {
      createTable,
      projectTagPairs: insertedProjectUrlPairs,
    };
  } catch (error) {
    console.error("Error seeding projects-urls mapping:", error);
    throw error;
  }
}

async function seedProjects(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Drop the tag_groups table if it exists
    await client.sql`DROP TABLE IF EXISTS projects`;

    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS projects (
    app_code VARCHAR(20) PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    company VARCHAR(255),
    thumbnail_format VARCHAR(20) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    type INT NOT NULL
  );
`;

    console.log(`Created "projects" table`);

    const realWorldInsertions = realWorldProjectsData.map(
      (project) => client.sql`
    INSERT INTO projects (app_code, title, company, thumbnail_format, description, type)
    VALUES (${project.appCode}, ${project.title}, ${project.company}, ${project.thumbnailFormat}, ${project.desc}, ${1})
    ON CONFLICT (app_code) DO NOTHING;
  `
    );

    const otherProjectsInsertions = otherProjectsData.map(
      (project) => client.sql`
    INSERT INTO projects (app_code, title, thumbnail_format, description, type)
    VALUES (${project.appCode}, ${project.title}, ${project.thumbnailFormat}, ${project.desc}, ${2})
    ON CONFLICT (app_code) DO NOTHING;
  `
    );

    const insertedRealWorldProjects = await Promise.all(realWorldInsertions);
    const insertedOtherProjects = await Promise.all(otherProjectsInsertions);

    const insertedProjects = insertedRealWorldProjects.concat(
      insertedOtherProjects
    );

    console.log(`Seeded ${insertedProjects.length} projects`);

    return {
      createTable,
      projects: insertedProjects,
    };
  } catch (error) {
    console.error("Error seeding projects:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedTagGroups(client);
  await seedTags(client);
  await seedProjectsTagsMapping(client);
  await seedProjectsUrlsMapping(client);
  await seedProjects(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
