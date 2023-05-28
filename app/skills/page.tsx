import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import Icon from "../../components/icon";

export default function Skills() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between">
      <Navigation />
      <div className="flex flex-col items-center">
        <p className="text-3xl mt-5 text-center">My Tools</p>
        <div className="flex w-1/2 flex-wrap justify-center mt-5">
          <Icon name="React" path="/images/temp/icons/react_icon.jpg" />
          <Icon name="Next.js" path="/images/temp/icons/nextjs_icon.jpg" />

          <Icon name="Redux" path="/images/temp/icons/redux_icon.jpg" />
          <Icon
            name="emotion.js"
            path="/images/temp/icons/emotionjs_icon.jpg"
          />
          <Icon
            name="Tailwind CSS"
            path="/images/temp/icons/tailwind_icon.jpg"
          />
          <Icon
            name="Javascript"
            path="/images/temp/icons/javascript_icon.jpg"
          />
          <Icon
            name="Typescript"
            path="/images/temp/icons/typescript_icon.jpg"
          />
          <Icon name="Sanity.io" path="/images/temp/icons/sanityio_icon.jpg" />
          <Icon name="Laravel" path="/images/temp/icons/laravel_icon.jpg" />
          <Icon name="php" path="/images/temp/icons/php_icon.jpg" />
          <Icon
            name="ASP.NET Core"
            path="/images/temp/icons/aspnetcore_icon.jpg"
          />
          <Icon name="C#" path="/images/temp/icons/csharp_icon.jpg" />
          <Icon name="jQuery" path="/images/temp/icons/jquery_icon.jpg" />
          <Icon name="Express" path="/images/temp/icons/express_icon.jpg" />
          <Icon name="Nodejs" path="/images/temp/icons/nodejs_icon.jpg" />
          <Icon name="MongoDB" path="/images/temp/icons/mongo_icon.jpg" />
          <Icon name="MySQL" path="/images/temp/icons/mysql_icon.jpg" />
          <Icon name="AWS" path="/images/temp/icons/aws_icon.jpg" />
          <Icon name="Git" path="/images/temp/icons/git_icon.jpg" />
        </div>
      </div>
      <Footer />
    </main>
  );
}
