import Banner from "./Body/Banner";
import Item from "./Body/Item";
import Footer from "./Footer";
import Header from "./Header";

const data = [
  {
    title: "Fresh new layout",
    content:
      "With Bootstrap 5, we've created a fresh new layout for this template!",
    icon: "bi bi-collection-fill",
  },
  {
    title: "Free to download",
    content:
      "As always, Start Bootstrap has a powerful collectin of free templates.",
    icon: "bi bi-cloud-download",
  },
  {
    title: "Jumbotron hero header",
    content: "The heroic part of this template is the jumbotron hero header!",
    icon: "bi bi-stack",
  },
  {
    title: "Feature boxes",
    content: "We've created some custom feature boxes using Bootstrap icons!",
    icon: "bi bi-bootstrap",
  },
  {
    title: "Simple clean code",
    content: "We've created some custom feature boxes using Bootstrap icons!",

    icon: "bi bi-code-slash",
  },
  {
    title: "A name you trust",
    content:
      "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
    icon: "bi bi-patch-check",
  },
];

const BaiTapThucHanhLayout = () => {
  return (
    <div>
      <Header />

      <Banner />
      <div className="container mt-7 mb-5">
        <div className="row">
          {data.map((item) => {
            return <Item data={item} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BaiTapThucHanhLayout;
