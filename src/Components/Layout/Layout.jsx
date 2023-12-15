import "./Layout.css";
import Popup from "reactjs-popup";

export const Layout = () => {
  const courseData = [
    {
      title: "Python",
      description:
        "Master the Python programming language and build powerful automation scripts.",
      span: "bi bi-file-ppt-fill",
    },
    {
      title: "Java",
      description:
        "Develop enterprise-level applications with Java and customize software for business needs.",
      span: "bi bi-filetype-java",
    },
    {
      title: "React",
      description:
        "Create interactive user interfaces with React and leverage the power of AI for enhanced productivity.",
      span: "bi bi-filetype-jsx",
    },
    {
      title: "Angular",
      description:
        "Manage and resolve tickets efficiently using Angular for task organization.",
      span: "bi bi-arrows-expand-vertical",
    },
    {
      title: ".NET",
      description:
        "Build robust and scalable applications with the .NET framework for seamless integration and performance.",
      span: "bi bi-dribbble",
    },
    {
      title: "MySQL",
      description:
        "Learn database management with MySQL and implement efficient data storage and retrieval solutions.",
      span: "bi bi-gear",
    },
    {
      title: "Machine Learning",
      description:
      "Explore advanced techniques in machine learning and develop intelligent solutions.",
      span: "bi bi-arrows-expand-vertical",
    },
    {
      title: "Data Science",
      description:
      "Gain expertise in data science techniques for extracting valuable insights from large datasets.",
      span: "bi bi-arrows-expand-vertical",
    },
    {
      title: "Power BI",
      description:
        "Utilize Power BI to measure, analyze, and visualize metrics for effective help desk deployment.",
      span: "bi bi-bar-chart-fill",
    },
    {
      title: "Pega",
      description:
        "Build customized solutions with Pega using flexible APIs and webhooks tailored to your requirements.",
      span: "bi bi-arrows-expand-vertical",
    },
    
  ];

  return (
    <div className="layout w-100 p-3">
      <h2 className="text-center">
        <b className="text-primary">AKTECH</b> IT Support - Available Courses
      </h2>
      <hr />
      <div className="row m-4">
        {courseData.map((course) => (
          <div className="card p-0 m-2 col-4" key={course.title}>
            <div className="card-body d-flex justify-content-between">
              <div className="col-2 mt-2">
                <span className={course.span}></span>
              </div>
              <div className="col-10">
                <h3>{course.title}</h3>
                {/* <p>{course.description}</p> */}
                {/* <a
                  className="text-danger"
                  href="/"
                  style={{ textDecoration: "none" }}
                >
                  Explore <i className="bi bi-arrow-right"></i>
                </a> */}
                <Popup
                  trigger={
                    <a
                      className="text-danger"
                      href="#"
                      style={{ textDecoration: "none" }}
                    >
                      {" "}
                      Explore <i className="bi bi-arrow-right"></i>
                    </a>
                  }
                  position="right top"
                >
                  <div className="popup p-3">
                    <p className="text-muted">{course.description}</p>
                  </div>
                </Popup>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
