import TopNav from "../ui/HeadNav/TopNav";
import ProfileImage from "../ui/About/ProfileImage";
import styles from "@/app/ui/about.module.css";

export default function Page() {
  return (
    <>
      <header>
        <TopNav />
      </header>
      <main>
        <section className="flex justify-center flex-wrap">
          <ProfileImage />
          <div className={`${styles.description}`}>
            <h2>Hey! I'm Eirian</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              scelerisque quam eu massa tincidunt fringilla. Mauris vitae nunc
              eros. Curabitur nec ex aliquam, blandit ante et, venenatis tortor.
              Pellentesque quis lobortis nisl, eu semper nisl. Ut in lacinia
              metus. Phasellus interdum blandit ornare. Sed blandit, nisl vitae
              consectetur molestie, quam velit commodo arcu, non mattis felis mi
              facilisis metus. Ut lectus mi, gravida at fringilla ac, tempor sit
              amet elit. Phasellus placerat diam eget nulla lacinia feugiat.
              Vestibulum velit ligula, congue id erat vitae, condimentum
              malesuada metus. Praesent vel lobortis neque. Aliquam in
              ullamcorper augue. Curabitur placerat condimentum vehicula. Etiam
              fermentum auctor ullamcorper.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
