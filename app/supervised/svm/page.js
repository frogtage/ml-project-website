import Image from "next/image";

export default function Svm() {
  return (
    <div className="container">
      <h1 className="global-header">ماشین‌های بردار پشتیبانی (SVM)</h1>
      <p className="global-text">
        ماشین بردار پشتیبان (SVM) یک الگوریتم یادگیری ماشینی نظارت شده است که
        برای کارهای طبقه‌بندی و رگرسیون استفاده می‌شود. در حالی که می تواند
        مشکلات رگرسیون را مدیریت کند، SVM به ویژه برای کارهای طبقه بندی مناسب
        است. هدف SVM یافتن ابر صفحه بهینه در فضای N بعدی برای جداسازی نقاط داده
        در کلاس‌های مختلف است. این الگوریتم حاشیه بین نزدیک ترین نقاط کلاس های
        مختلف را به حداکثر می رساند.
      </p>
      <div className="svm-image-container">
        <Image
          src="/svm.webp"
          width={700}
          height={500}
          alt="supervised-learning"
        />
      </div>
    </div>
  );
}
