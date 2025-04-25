import Image from "next/image";

export default function DataCleaning() {
  return (
    <div className="container">
      <h1 className="global-header">پاکسازی داده ها</h1>
      <p className="global-text">
        پاکسازی داده ها مرحله مهمی در خط لوله یادگیری ماشینی (ML) است، زیرا شامل
        شناسایی و حذف هرگونه داده تکراری یا نامربوط از دست رفته است. هدف از
        پاکسازی داده ها اطمینان از دقیق، سازگار بودن و بدون خطا بودن داده ها
        است، زیرا داده های خام اغلب نویز، ناقص و ناسازگار هستند که می تواند بر
        دقت مدل و قابلیت اطمینان بینش های حاصل از آن تأثیر منفی بگذارد.
      </p>
      <div className="dataclean-container">
        <div className="dataclean-text">
          <h2 className="dataclean-subheader">حذف مشاهدات ناخواسته :</h2>
          <p className="dataclean-text">
            مشاهدات نامربوط یا اضافی (ناخواسته) را از مجموعه داده شناسایی و حذف
            کنید. این مرحله شامل تجزیه و تحلیل ورودی های داده برای رکوردهای
            تکراری، اطلاعات نامربوط یا نقاط داده ای است که به تجزیه و تحلیل و
            پیش بینی کمک نمی کنند.
          </p>
          <h2 className="dataclean-subheader">رفع خطاهای ساختاری :</h2>
          <p className="dataclean-text">
            به مسائل ساختاری در مجموعه داده‌ها مانند ناسازگاری در قالب‌های داده
            یا انواع متغیرها رسیدگی کنید.
          </p>
          <h1 className="dataclean-subheader">مدیریت نقاط پرت :</h1>
          <p className="dataclean-text">
            نقاط پرت آن نقاطی هستند که به طور قابل توجهی از میانگین مجموعه داده
            ها انحراف دارند.
          </p>
          <h1 className="dataclean-subheader">
            رسیدگی به داده های از دست رفته :
          </h1>
          <p className="dataclean-text">
            برای مدیریت موثر داده‌های از دست رفته، باید مقادیر گمشده را بر اساس
            روش‌های آماری، حذف سوابق دارای مقادیر گمشده یا استفاده از تکنیک‌های
            انتساب پیشرفته نسبت دهیم.
          </p>
        </div>
        <div className="dataclean-image">
          <Image
            src="/datacleaning.webp"
            width={400}
            height={400}
            alt="data-cleaning"
          />
        </div>
      </div>
    </div>
  );
}
