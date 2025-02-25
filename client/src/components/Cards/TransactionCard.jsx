//STYLES
import styles from "../../styles/Cards/TransactionCard.module.scss";
import { FiBox } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { BsHouseDoor } from "react-icons/bs";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { HiOutlineFire } from "react-icons/hi";

//UTILS
import { useEffect, useState } from "react";

const CategoryIcon = ({ category }) => {
  const [style, setStyle] = useState({});
  const categoryStyle = () => {
    switch (category) {
      default: {
        return {
          background: "#ffbece",
          icon: <HiOutlineFire />,
          color: "#ff6275",
        };
      }
      case "Products": {
        return {
          background: "#fdeacc",
          icon: <FiBox />,
          color: "#f8aa35",
        };
      }

      case "Entertainment":
        return {
          background: "#e4f1d5",
          icon: <IoGameControllerOutline />,
          color: "#92c44c",
        };

      case "Bills": {
        return {
          background: "#b7dffd",
          icon: <BsHouseDoor />,
          color: "#5a92d6",
        };
      }
    }
  };

  useEffect(() => {
    setStyle(categoryStyle());
  }, [category]);
  return (
    <div
      className={styles.iconContainer}
      style={{ background: style.background, color: style.color }}
    >
      {style.icon}
    </div>
  );
};

CategoryIcon.defaultProps = {
  category: "Products",
};

const TransactionCard = ({ category, date, money, description, title }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {/* INFO */}
        <div className={styles.info}>
          <CategoryIcon category={category} />
          <div className={styles.categoryContainer}>
            <span className={styles.title}>{title}</span>
            <span className={styles.category}>{category}</span>
            <span className={styles.date}>{date}</span>
            <div
              className={`${visible ? styles.descriptionActive : undefined} ${
                styles.description
              }`}
            >
              <p>{description}</p>
            </div>
          </div>
        </div>

        {/* MONEY */}
        <div className={styles.moneyContainer}>
          <span>{`₹${money}`}</span>
          <div
            className={styles.iconContainer}
            onClick={() => setVisible(!visible)}
            style={description ? {} : { opacity: 0, pointerEvents: "none" }}
          >
            {visible ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
          </div>
        </div>
      </div>
    </div>
  );
};

TransactionCard.defaultProps = {
  category: "Products",
  date: "29 Feb 2020",
  description: "Lorem Ipsum",
  money: "30.65",
};

export default TransactionCard;
