import Image from "next/image";

export default function LinearReg() {
  return (
    <div className="container">
      <h1 className="global-header">رگرسیون خطی (Linear Regression)</h1>
      <p className="global-text">
        رگرسیون خطی نیز نوعی از الگوریتم یادگیری ماشینی نظارت شده است که از
        مجموعه داده‌های برچسب‌گذاری‌شده یاد می‌گیرد و نقاط داده را با بهینه‌ترین
        توابع خطی ترسیم می‌کند که می‌تواند برای پیش‌بینی مجموعه داده‌های جدید
        استفاده شود. با برازش یک معادله خطی با داده های مشاهده شده، رابطه خطی
        بین متغیر وابسته و یک یا چند ویژگی مستقل را محاسبه می کند. متغیرهای
        خروجی پیوسته را بر اساس متغیر ورودی مستقل پیش بینی می کند.
      </p>
      <div className="linear-image-container">
        <Image
          src="/python-linear-regression-4.webp"
          width={700}
          height={500}
          alt="supervised-learning"
        />
        <Image
          src="/linear.webp"
          width={500}
          height={300}
          alt="supervised-learning"
        />
      </div>
    </div>
  );
}
