import SkillCarousel from "../SkillCarousel";
import githubIcon from "../../assets/githubSkills.png";
import pandasIcon from "../../assets/pandas.png";

export default function SkillsContent({darkMode}) {
  return (
    <section className="py-8 mt-4 space-y-12">
      <SkillCarousel
        dark={darkMode ? true : false}
        title="Languages"
        devicons={[
          { icon: "devicon-c-plain", label: "C" },
          { icon: "devicon-cplusplus-plain", label: "C++" },
          { icon: "devicon-java-plain", label: "Java" },
          { icon: "devicon-python-plain", label: "Python" },
          { icon: "devicon-javascript-plain", label: "JavaScript" },
          { icon: "devicon-typescript-plain", label: "TypeScript" },
          { icon: "devicon-kotlin-plain", label: "Kotlin" },
          { icon: "devicon-sqldeveloper-plain", label: "SQL" },
        ]}
      />

      <SkillCarousel
        dark={darkMode ? true : false}
        title="Libraries & Frameworks"
        devicons={[
          { icon: "devicon-numpy-plain", label: "NumPy" },
          darkMode ? {image: pandasIcon, label: "Pandas"}: { icon: "devicon-pandas-plain", label: "Pandas" },
          { icon: "devicon-matplotlib-plain", label: "Matplotlib" },
          { icon: "devicon-scikitlearn-plain", label: "Scikit-learn" },
          { icon: "devicon-tensorflow-original", label: "TensorFlow" },
          { icon: "devicon-selenium-original", label: "Selenium" },
          { icon: "devicon-react-original", label: "React" },
          { icon: "devicon-nodejs-plain", label: "Node.js" },
          { icon: "devicon-django-plain", label: "Django" },
          { icon: "devicon-spring-plain", label: "Spring Boot" },
          { icon: "devicon-jetpackcompose-plain-wordmark colored", label: "Jetpack Compose" },
          { icon: "devicon-tailwindcss-original colored", label: "Tailwind CSS" },
        ]}
      />

      <SkillCarousel
        dark={darkMode ? true : false}
        title="Databases"
        devicons={[
          { icon: "devicon-postgresql-plain", label: "PostgreSQL" },
          { icon: "devicon-mysql-plain", label: "MySQL" },
          { icon: "devicon-mongodb-plain", label: "MongoDB" },
        ]}
      />

      <SkillCarousel
        dark={darkMode ? true : false}
        title="Tools, DevOps & IDEs"
        devicons={[
          { icon: "devicon-docker-plain", label: "Docker" },
          { icon: "devicon-kubernetes-plain colored", label: "Kubernetes" },
          { icon: "devicon-git-plain", label: "Git" },
          darkMode ? { image: githubIcon, label: "GitHub"} : { icon: "devicon-github-original", label: "Github"},
          { icon: "devicon-postman-plain", label: "Postman" },
          { icon: "devicon-vitejs-plain", label: "Vite.js" },
          { icon: "devicon-vscode-plain", label: "VS Code" },
          { icon: "devicon-jupyter-plain-wordmark", label: "Jupyter" },
          { icon: "devicon-androidstudio-plain", label: "Android Studio" },
          { icon: "devicon-clion-plain", label: "CLion" },
          { icon: "devicon-pycharm-plain colored", label: "PyCharm" },
          { icon: "devicon-cmake-plain colored", label: "CMake" },
        ]}
      />
    </section>
  );
}