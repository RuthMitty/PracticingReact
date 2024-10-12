interface PropsComponent {
  name: string;
  age: number;
  favoriteDish: string;
}

export function SecondComponent(props: PropsComponent) {
  return (
    <div>
      Hello {props.name}
      <br />
      {props.favoriteDish}
      <br />
      {props.age}
    </div>
  );
}
