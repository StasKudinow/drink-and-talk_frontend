import mainImageSecond from "../images/main-image2.png"

function AboutProject() {

  return(
    <section className="container mx-auto px-[167px] pb-[186.7px] flex flex-raw justify-between">
      <div className="max-w-[634px] pt-[15.65px]">
        <h2 className="mb-[25px] font-normal text-h2-web leading-[46px] text-black">О сервисе</h2>
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
      <img src={mainImageSecond} alt="secondMain" />
    </section>
  );
}

export default AboutProject;