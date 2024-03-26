"use server";

import { sql } from "@vercel/postgres";
import { TagGroup } from "./types";
import { ProjectCardProps } from "./interfaces";
import { categorizeProjects } from "./utils";
const util = require("util");

export async function fetchTagsInGroups() {
  try {
    const data =
      await sql<TagGroup>`SELECT tag_groups.tag_group_name AS "groupName", ARRAY_AGG(DISTINCT tags.tag_name) AS tags
    FROM tags 
    LEFT JOIN tag_groups ON tags.tag_group_id::uuid = tag_groups.id GROUP BY tag_groups.tag_group_name;`;
    const result = data.rows;
    // console.log(result);
    return result;
    // Return the projects data as props
    // return {
    //   props: {
    //     tags: result,
    //   },
    // };
  } catch (error) {
    console.error("Failed to fetch tags:", error);
    return [];
  }
}

export async function fetchProjectsInTypes() {
  try {
    const data = await sql<ProjectCardProps>`
    SELECT 
      "appCode",
      title,
      tags,
      "thumbnailFormat",
      description AS desc,
      type,
      ARRAY_AGG(url_obj) AS urls
    FROM (
      SELECT 
        projects.app_code AS "appCode",
        projects.title,
        projects.date,
        ARRAY_AGG(DISTINCT tags.tag_name) AS tags,
        projects.thumbnail_format AS "thumbnailFormat",
        projects.description,
        type,
        JSON_BUILD_OBJECT(
            'type', projects_urls_mapping.link_type,
            'url', projects_urls_mapping.link_url
        ) AS url_obj
      FROM 
          projects
      LEFT JOIN 
          projects_urls_mapping ON projects.app_code = projects_urls_mapping.app_code
      INNER JOIN 
          projects_tags_mapping ON projects.app_code = projects_tags_mapping.app_code
      INNER JOIN 
          tags ON projects_tags_mapping.tag_id::uuid = tags.id
      GROUP BY 
          projects.app_code, projects.title, projects.date, projects.thumbnail_format, projects.description, type, projects_urls_mapping.link_type, projects_urls_mapping.link_url
    ) AS subquery
  GROUP BY 
    "appCode", title, date, tags, "thumbnailFormat", description, type
  ORDER BY date DESC;

  `;
    const result = categorizeProjects(data.rows);
    data.rows.map((obj) =>
      console.log(util.inspect(obj, { showHidden: false, depth: null }))
    );
    // console.log(result);
    return result;
    // return {
    //   props: {
    //     realWorldProjectsData: (await result).realWorldProjectsData,
    //     otherProjectsData: (await result).otherProjectsData,
    //   },
    // };
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return { realWorldProjectsData: [], otherProjectsData: [] };
  }
}
