import Image from "next/image";

export default function ModelFree() {
  return (
    <div className="container">
      <h1 className="global-header">یادگیری تقویتی بدون مدل</h1>
      <p className="global-text">
        یادگیری تقویتی بدون مدل بهترین راه را برای عمل بدون نیاز به مدلی از محیط
        نشان می دهد. مانند این است که به جای خواندن کتاب قوانین، با تلاش مکرر،
        یک بازی را یاد بگیرید. با گذشت زمان، می آموزد که چه اقداماتی از طریق
        آزمون و خطا نتایج خوبی می دهد. در شرایطی که نمی‌توانیم پیش‌بینی کنیم چه
        اتفاقی می‌افتد یا همه قوانین را نمی‌دانیم، به خوبی کار می‌کند.
      </p>
      <div className="modelFree-image-container">
        <Image
          src="/model-free.webp"
          width={700}
          height={500}
          alt="supervised-learning"
        />
      </div>
    </div>
  );
}
