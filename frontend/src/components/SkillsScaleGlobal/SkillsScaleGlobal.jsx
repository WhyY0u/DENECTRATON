import styles from './styles/SkillsScaleGlobal.module.css';
export const SkillScale = ({ skill, level }) => {
    const maxLevel = 5;
    const scalePercentage = (level / maxLevel) * 100; 

   const getColorByLevel = (level) => {
    switch (level) {
      case 1:
        return '#ff4d4d'; 
      case 2:
        return '#ff9933';
      case 3:
        return '#ffcc00'; 
      case 4:
        return '#99cc33'; 
      case 5:
        return '#4caf50';
      default:
        return '#e0e0e0'; 
    }
  };

    return (
      <div className={styles.setofskillsblock}>
        <div className={styles.setofskillstitle}>{skill}</div>
        <div className={styles.setofskillsscale}>
        <div
          className={styles.setofskillsfilled}
          style={{
            width: `${scalePercentage}%`,
            backgroundColor: getColorByLevel(level), 
          }}
        ></div>
        </div>
      </div>
    );
  };