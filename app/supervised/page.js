import Image from "next/image";

export default function Supervised() {
  return (
    <div className="container">
      <h1 className="global-header">یادگیری تحت نظارت</h1>
      <p className="global-text">
        یادگیری نظارت شده یک تکنیک یادگیری ماشینی است که از مجموعه داده های
        برچسب گذاری شده برای آموزش مدل های الگوریتم هوش مصنوعی برای شناسایی
        الگوهای اساسی و روابط بین ویژگی های ورودی و خروجی استفاده می کند. هدف
        فرآیند یادگیری ایجاد مدلی است که بتواند خروجی های صحیح را بر روی داده
        های جدید دنیای واقعی پیش بینی کند.
      </p>
      <div className="supervisedLearning-image-container">
        <Image
          src="/Supervised-learning.webp"
          width={700}
          height={500}
          alt="supervised-learning"
        />
      </div>
    </div>
  );
}
