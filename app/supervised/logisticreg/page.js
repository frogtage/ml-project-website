import Image from "next/image";

export default function LogisticReg() {
  return (
    <div className="container">
      <h1 className="global-header">رگرسیون لاجستیک (Logistic Regression)</h1>
      <p className="global-text">
        رگرسیون لجستیک یک الگوریتم یادگیری ماشینی نظارت شده است که برای کارهای
        طبقه‌بندی استفاده می‌شود که هدف آن پیش‌بینی احتمال تعلق یا عدم تعلق یک
        نمونه به یک کلاس معین است. رگرسیون لجستیک یک الگوریتم آماری است که رابطه
        بین دو عامل داده را تجزیه و تحلیل می کند.
      </p>
      <div className="logistic-image-container">
        <Image
          src="/logistic.webp"
          width={400}
          height={300}
          alt="supervised-learning"
        />
      </div>
    </div>
  );
}
