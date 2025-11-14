import { gridItems, i18n } from "@/data";
import { useLanguage } from "@/app/provider";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  const { lang } = useLanguage();
  const t = i18n[lang as "en" | "pt"].sections.about;
  const getTitle = (id: number, def: any) => {
    switch (id) {
      case 1:
        return t.item1Title;
      case 2:
        return t.item2Title;
      case 3:
        return t.item3Title;
      case 4:
        return t.item4Title;
      case 5:
        return t.item5Title;
      case 6:
        return t.item6Title;
      default:
        return def;
    }
  };
  const getDesc = (id: number, def: any) => {
    switch (id) {
      case 3:
        return t.item3Desc;
      case 5:
        return t.item5Desc;
      default:
        return def;
    }
  };
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={getTitle(item.id, item.title)}
            description={getDesc(item.id, item.description)}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
