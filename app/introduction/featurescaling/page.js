import Image from "next/image";

export default function FeatureScaling() {
  return (
    <div className="container">
      <h1 className="global-header">مقیاس بندی ویژگی ها</h1>
      <p className="global-text">
        مقیاس‌بندی ویژگی تکنیکی است برای استاندارد کردن ویژگی‌های مستقل موجود در
        داده‌ها. در طول پیش پردازش داده ها برای رسیدگی به مقادیر بسیار متفاوت
        انجام می شود. اگر مقیاس بندی ویژگی انجام نشود، الگوریتم یادگیری ماشین
        تمایل دارد از مقادیر بیشتر به عنوان بالاتر استفاده کند و مقادیر کوچکتر
        را بدون توجه به واحد مقادیر کمتر در نظر بگیرد.
      </p>
      <div className="featureScaling-image-container">
        <Image
          src="/feature-scaling.webp"
          alt="feature-scaling"
          width={700}
          height={500}
        />
      </div>
    </div>
  );
}
