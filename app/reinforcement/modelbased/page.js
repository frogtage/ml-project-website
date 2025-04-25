import Image from "next/image";

export default function ModelBased() {
  return (
    <div className="container">
      <h1 className="global-header">یادگیری تقویتی مبتنی بر مدل</h1>
      <p className="global-text">
        یادگیری تقویتی مبتنی بر مدل، زیرمجموعه‌ای از یادگیری تقویتی است که در آن
        عامل یک مدل داخلی از پویایی محیط می‌سازد و از آن برای شبیه‌سازی حالت‌های
        آینده، پیش‌بینی پاداش‌ها و بهینه‌سازی اقدامات به طور مؤثر استفاده
        می‌کند.
      </p>

      <div className="modelBased-container">
        <div className="modelBased-text-main">
          <h2 className="modelBased-subheader">1. یادگیری مدل :</h2>
          <p className="modelBased-text">
            عامل با تعامل با محیط، تجربیات را جمع آوری می کند و سپس از این
            تجربیات برای یادگیری مدلی استفاده می کند که وضعیت ها و پاداش های
            آینده را پیش بینی می کند.
          </p>

          <h2 className="modelBased-subheader">
            2. برنامه ریزی مبتنی بر مدل :
          </h2>
          <p className="modelBased-text">
            سپس مدل آموخته شده برای شبیه سازی تعاملات آینده بدون نیاز به تعامل
            با محیط واقعی استفاده می شود. الگوریتم های برنامه ریزی مانند جستجوی
            درخت مونت کارلو (MCTS) یا برنامه نویسی پویا می توانند برای شناسایی
            اقدامات بهینه استفاده شوند.
          </p>

          <h2 className="modelBased-subheader">3. بهینه سازی :</h2>
          <p className="modelBased-text">
            عامل از نتایج حاصل از برنامه ریزی برای بهینه سازی خط مشی خود استفاده
            می کند، که سپس به محیط واقعی مستقر می شود.
          </p>

          <h2 className="modelBased-subheader">4. یادگیری مستمر :</h2>
          <p className="modelBased-text">
            این مدل به طور مرتب به روز می شود زیرا نماینده تجربیات جدید را جمع
            آوری می کند و دقت مدل و عملکرد عامل را در طول زمان بهبود می بخشد.
          </p>
        </div>
        <div className="modelBased-image">
          <div className="modelBased-image-container">
            <Image
              src="/model-based.webp"
              width={500}
              height={500}
              alt="supervised-learning"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
