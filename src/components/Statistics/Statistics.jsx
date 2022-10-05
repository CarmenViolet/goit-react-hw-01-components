import css from "./Statistics.module.css"
import PropTypes from "prop-types";

export const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
      {title ? <h2 className={css.title}>Upload stats</h2> : ""}
        <ul className={css.stat_list}>{stats.map((stat) => {return(<li className={css.item} key={stat.id}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>)})}
        </ul>
      </section>
    )
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}