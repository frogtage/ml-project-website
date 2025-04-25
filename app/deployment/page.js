import Image from "next/image";

export default function Deployment() {
  return (
    <div className="container">
      <h1 className="global-header">استقرار مدل های ML</h1>
      <p className="global-text">
        استقرار یک مدل یادگیری ماشین، که به عنوان استقرار مدل نیز شناخته می‌شود،
        به سادگی به معنای ادغام یک مدل یادگیری ماشین در یک محیط تولید موجود است
        که در آن می‌تواند ورودی را دریافت کرده و خروجی را برگرداند. هدف از
        استقرار مدل شما این است که پیش‌بینی‌های یک مدل یادگیری ماشین آموزش‌دیده
        را در دسترس دیگران قرار دهید، خواه کاربران، مدیریت یا سایر سیستم‌ها
        باشند.
      </p>
      <div className="deployment-image-container">
        <Image
          className="deployment-image"
          src="/Development-of-the-ML-Ops-Pipeline_00-1024x538.webp"
          width={700}
          height={700}
          alt="supervised-learning"
        />
      </div>
    </div>
  );
}
