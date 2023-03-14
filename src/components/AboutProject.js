import mainImageSecond from '../images/main-image2.png'

function AboutProject() {
  return (
    <section className="container mx-auto px-34 pb-38 flex flex-raw justify-between relative">
      <div className="w-[642px] h-[429px] bg-dots_2 bg-cover absolute top-[-30px] right-[51px]" />
      <div id="About" className="max-w-[634px] pt-3">
        <h2 className="mb-5 font-normal text-h2-web leading-[46px] text-black">
          О сервисе
        </h2>

        <p className="font-normal text-text-sm-web leading-[146.34%]">
          Современный образ жизни уже давно не позволяет нам
          легко и быстро находить интересных собутыльников,
          особенно в реальном мире. Нередко у нас просто не
          хватает времени на поиски единомышленников в
          офлайне. <br />
          Наш портал предоставляет уникальную возможность
          найти интересных собутыльников с общими интересами
          в любое время и в любом месте, где есть доступ в
          Интернет - дома, в офисе или где бы вы не
          находились. Более того, вы можете расширить свой
          круг общения, общаясь с людьми из разных городов и
          стран. В непринужденной атмосфере нашего портала
          вы можете обмениваться опытом, делиться
          интересными историями и находить новых друзей со
          всего мира.
        </p>
      </div>
      <img src={mainImageSecond} alt="second-main" />
    </section>
  )
}

export default AboutProject
