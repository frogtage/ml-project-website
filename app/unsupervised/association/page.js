import Image from "next/image";

export default function Association() {
  return (
    <div className="container">
      <h1 className="global-header">قانون انجمن (Association Rule)</h1>
      <p className="global-text">
        کاوی قواعد انجمن، ارتباطات و روابط جالبی را در میان مجموعه‌های بزرگی از
        اقلام داده پیدا می‌کند. این قانون نشان می‌دهد که یک مجموعه آیتم در یک
        تراکنش چقدر اتفاق می‌افتد.
      </p>
      <div className="association-image-container">
        <Image
          src="/association.webp"
          width={550}
          height={550}
          alt="supervised-learning"
        />
      </div>
    </div>
  );
}
