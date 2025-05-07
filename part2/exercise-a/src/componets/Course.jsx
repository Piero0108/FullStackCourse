const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => {
  const course = props.parts

  return (
    <div>
      <ul>
        {course.map(cour => 
          <li key={cour.id}>
            {cour.name}
            {' '}
            {cour.exercises}
          </li>
        )}
      </ul>
    </div>
  )
}

const Total = (props) => <p>total of {props.total} exercises</p>

const Course = (props) => {
  const { course } = props
  const parts1 = course[0].parts
  const total1 = parts1.map(part => part.exercises).reduce((sum, value) => sum + value, 0);

  const parts2 = course[1].parts
  const total2 = parts2.map(part => part.exercises).reduce((sum, value) => sum + value, 0);

  return (
    <div>
      <Header course={course[0].name} />
      <Content parts={course[0].parts} />
      <Total total={total1} />
      
      <Header course={course[1].name} />
      <Content parts={course[1].parts} />
      <Total total={total2} />
    </div>
  )
}

export default Course