import Image from "next/image";

export default function NaiveBayes() {
  return (
    <div className="container">
      <h1 className="global-header">Naive Bayes</h1>
      <p className="global-text">
        ایده اصلی پشت طبقه‌بندی‌کننده Naive Bayes استفاده از قضیه بیز برای
        طبقه‌بندی داده‌ها بر اساس احتمالات کلاس‌های مختلف با توجه به ویژگی‌های
        داده‌ها است. بیشتر در طبقه بندی متن با ابعاد بالا استفاده می شود
      </p>
      <p className="global-text">
        طبقه بندی کننده ساده بیز یک طبقه بندی کننده احتمالی ساده است و دارای
        تعداد بسیار کمی پارامتر است که برای ساخت مدل های ML استفاده می شود که می
        توانند با سرعت بیشتری نسبت به سایر الگوریتم های طبقه بندی پیش بینی کنند.
      </p>
      <p className="global-text">
        این یک طبقه بندی کننده احتمالی است زیرا فرض می کند که یک ویژگی در مدل
        مستقل از وجود ویژگی دیگر است. به عبارت دیگر، هر ویژگی به پیش بینی ها کمک
        می کند که هیچ ارتباطی بین یکدیگر ندارند.
      </p>
      <p className="global-text">
        الگوریتم ساده بیز در فیلتر کردن هرزنامه، تجزیه و تحلیل احساسات، طبقه
        بندی مقالات و بسیاری موارد دیگر استفاده می شود.
      </p>
      <div className="naiveBays-image-container">
        <Image
          src="/naive-bays.webp"
          width={500}
          height={500}
          alt="supervised-learning"
        />
      </div>
    </div>
  );
}
