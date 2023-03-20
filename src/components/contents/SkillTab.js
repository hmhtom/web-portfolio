import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "next/image";

function SkillTab() {
  const languageList = ["java", "python", "javascript", "typescript", "csharp"];
  const frontendList = [
    "css",
    "html",
    "react",
    "nextjs",
    "bootstrap",
    "material-ui",
    "redux",
    "jquery",
  ];
  const backendList = [
    "nodejs",
    "spring",
    "express",
    "hibernate",
    "django",
    "dotnet",
    "sequelize",
  ];

  const databaseList = [
    "mysql",
    "mongodb",
    "redis",
    "postgresql",
    "dynamodb",
    "aurora",
  ];

  const devopList = ["docker", "ubuntu", "kubernetes", "apache", "aws"];

  return (
    <Tabs defaultActiveKey="Language" fill className="text-light">
      <Tab
        eventKey="Language"
        title="Language"
        tabClassName="text-light bg-dark">
        {languageList.map((item) => (
          <Image
            priority
            title={item.toUpperCase()}
            src={`/${item}.svg`}
            height={32}
            width={32}
            alt={item}
            className="m-2 stack-icon"
          />
        ))}
      </Tab>
      <Tab
        eventKey="Frontend"
        title="Frontend"
        tabClassName="text-light bg-dark">
        {frontendList.map((item) => (
          <Image
            priority
            title={item.toUpperCase()}
            src={`/${item}.svg`}
            height={32}
            width={32}
            alt={item}
            className="m-2 stack-icon "
          />
        ))}
      </Tab>
      <Tab eventKey="Backend" title="Backend" tabClassName="text-light bg-dark">
        {backendList.map((item) => (
          <Image
            priority
            title={item.toUpperCase()}
            src={`/${item}.svg`}
            height={32}
            width={32}
            alt={item}
            className="m-2 stack-icon"
          />
        ))}
      </Tab>
      <Tab
        eventKey="Database"
        title="Database"
        tabClassName="text-light bg-dark">
        {databaseList.map((item) => (
          <Image
            priority
            title={item.toUpperCase()}
            src={`/${item}.svg`}
            height={32}
            width={32}
            alt={item}
            className="m-2 stack-icon "
          />
        ))}
      </Tab>

      <Tab eventKey="DevOps" title="DevOps" tabClassName="text-light bg-dark">
        {devopList.map((item) => (
          <Image
            priority
            title={item.toUpperCase()}
            src={`/${item}.svg`}
            height={32}
            width={32}
            alt={item}
            className="m-2 stack-icon"
          />
        ))}
      </Tab>
    </Tabs>
  );
}

export default SkillTab;
