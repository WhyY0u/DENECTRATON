import styles from './styles/SkillsScaleVnos.module.css';

export const SkillScaleExecGlobal = ({ skill, level }) => {
  const maxLevel = 10;
  const scalePercentage = (level / maxLevel) * 100;

  const getColorByLevel = (level) => {
    switch (level) {
      case 1:
        return '#ff4d4d'; // Красный
      case 2:
        return '#ff704d'; // Светло-красный
      case 3:
        return '#ff9933'; // Оранжевый
      case 4:
        return '#ffcc00'; // Желтый
      case 5:
        return '#e6e600'; // Светло-желтый
      case 6:
        return '#ccff33'; // Желто-зеленый
      case 7:
        return '#99cc33'; // Светло-зеленый
      case 8:
        return '#66cc33'; // Зеленый
      case 9:
        return '#4caf50'; // Темно-зеленый
      case 10:
        return '#009933'; // Максимально насыщенный зеленый
      default:
        return '#e0e0e0'; // Серый (если уровень не указан)
    }
  };

  return (
    <div className={styles.setofskills__block}>
      <div className={styles.setofskills__title}>{skill}</div>
      <div className={styles.setofskills__scale}>
        <div
          className={styles.setofskills__filled}
          style={{
            width: `${scalePercentage}%`,
            backgroundColor: getColorByLevel(level), // Цвет зависит от уровня
          }}
        ></div>
      </div>
    </div>
  );
};
