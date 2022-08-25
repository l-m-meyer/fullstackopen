
const Header = (props) => {
  console.log(props);
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part
        part={props.part1.name}
        exercise={props.part1.exercises}
      />
      <Part
        part={props.part2.name}
        exercise={props.part2.exercises}
      />
      <Part
        part={props.part3.name}
        exercise={props.part3.exercises}
      />
    </div>
  )
}
const Total = (props) => {
  return (
    <p>{props.exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total
        exercises={
          parts[0].exercises
          + parts[1].exercises
          + parts[2].exercises
        }
      />
    </div>
  );
}

export default App;
