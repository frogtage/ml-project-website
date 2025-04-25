import Image from "next/image";

export default function Knn() {
  return (
    <div className="container">
      <h1 className="global-header">الگوریتم نزدیکترین همسایه (KNN)</h1>
      <p className="global-text">
        KNN بر اساس شباهت ویژگی ها کار می کند. برای طبقه بندی یک نقطه جدید،
        الگوریتم "فاصله" بین نقطه جدید و سایر نقاط مجموعه داده را محاسبه می کند.
        رایج ترین روش برای اندازه گیری این فاصله با استفاده از فاصله اقلیدسی و
        فاصله منهتن است. هنگامی که فواصل محاسبه شد، الگوریتم اکثریت رای را از
        نزدیکترین نقطه K می گیرد و نقطه جدید را بر این اساس طبقه بندی می کند.
      </p>
      <div className="knn-images-container">
        <div className="knn-image-container">
          <Image
            src="/KNN.webp"
            width={700}
            height={500}
            alt="supervised-learning"
          />
        </div>
        <div className="knn-image-container">
          <Image
            src="/KNN-1.webp"
            width={400}
            height={200}
            alt="supervised-learning"
          />
        </div>
      </div>
    </div>
  );
}
