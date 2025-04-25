import Image from "next/image";

export default function Clusternig() {
  return (
    <div className="container">
      <h1 className="global-header">خوشه بندی (Clustering)</h1>
      <p className="global-text">
        خوشه بندی یک الگوریتم یادگیری ماشینی بدون نظارت است که اشیاء، نقاط داده
        یا مشاهدات مختلف را بر اساس شباهت ها یا الگوها در گروه ها یا خوشه ها
        سازماندهی و طبقه بندی می کند.
      </p>
      <div className="clustering-image-container">
        <Image
          src="/clustering.webp"
          width={700}
          height={500}
          alt="supervised-learning"
        />
      </div>
    </div>
  );
}
