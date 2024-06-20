
interface ITestProps {
  params: { id: string };
}
export default function Test(props:ITestProps) {
  const {id} = props.params
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">{id}</main>
  );
}
