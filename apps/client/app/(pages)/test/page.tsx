const TestPage = async () => {
  const res = await fetch("http://localhost:8000/test");
  const data = res.json();
  console.log(data);
  return <div>TestPage</div>;
};

export default TestPage;
