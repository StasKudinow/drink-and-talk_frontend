import mainImageSecond from "../images/main-image2.png"

function AboutProject() {

  return(
    <section className="container mx-auto px-34 pb-38 flex flex-raw justify-between relative">
      <div className="w-[642px] h-[429px] bg-dots_2 bg-cover absolute top-[-30px] right-[51px]" />
      <div className="max-w-[634px] pt-3">
        <h2 className="mb-5 font-normal text-h2-web leading-[46px] text-black">О сервисе</h2>
        <p className="font-normal text-text-sm-web leading-[146.34%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries Lorem
          Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries
        </p>
      </div>
      <img src={mainImageSecond} alt="second-main" />
    </section>
  )
}

export default AboutProject
