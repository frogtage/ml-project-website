import Image from "next/image";

export default function Reduction() {
  return (
    <div className="container">
      <h1 className="global-header">کاهش ابعاد (Dimensionality Reduction)</h1>
      <p className="global-text">
        هنگام کار با مدل‌های یادگیری ماشین، مجموعه‌های داده با ویژگی‌های بیش از
        حد می‌توانند مشکلاتی مانند محاسبات کند و برازش بیش از حد ایجاد کنند.
        کاهش ابعاد با کاهش تعداد ویژگی ها و حفظ اطلاعات کلیدی کمک می کند.
        تکنیک‌هایی مانند تجزیه و تحلیل مؤلفه اصلی (PCA)، تجزیه ارزش منفرد (SVD)
        و تجزیه و تحلیل تشخیص خطی (LDA) داده‌ها را در فضایی با ابعاد پایین‌تر،
        با حفظ جزئیات مهم، ارائه می‌کنند.
      </p>
      <div className="reduction-image-container">
        <Image
          src="/Dimensionality_Reduction_1.webp"
          width={550}
          height={550}
          alt="supervised-learning"
        />
      </div>
    </div>
  );
}
