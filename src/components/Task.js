import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ handleCheck, handleTrash, tasks }) => {
  return (
    <ul>
      {tasks.length > 0 &&
        tasks.map((elem, index) => {
          return (
            <li key={index}>
              <div>
                <input
                  type="checkbox"
                  checked={elem.done ? true : false}
                  onChange={() => handleCheck(index)}
                />
                <span className={elem.done ? "done" : ""} key={index}>
                  {elem.title}
                </span>
              </div>
              <FontAwesomeIcon
                onClick={() => handleTrash(index)}
                icon="trash"
                size="1px"
              />
            </li>
          );
        })}
    </ul>
  );
};

export default Task;
