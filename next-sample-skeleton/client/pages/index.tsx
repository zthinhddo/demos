import Table from "@/components/Table"

export default function Home() {
  return (
    <div id="table-wrapper" className="flex p-2 bg-white-500 h-screen w-full items-center justify-center">
      <div id="table-wrapper" className={`flex bg-white-100 h-full w-full justify-center items-center p-4`}>
        <div id="table-content" className={`flex bg-white-400 w-[70%] h-[80%] p-6 rounded-lg justify-center`}>
          <Table />
        </div>
      </div>
    </div >
  )
}
