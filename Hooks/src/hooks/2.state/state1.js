
import { useRef, useState } from "react";
import PlayListMock from "../../__mock__/playList.json";

function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */
  const titleRef = useRef('')
  const signerRef = useRef('')
  const [state,setState] = useState(false);

  const onAddData = () =>{
    PlayListMock.playlist.push({title:titleRef.current.value, signer:signerRef.current.value})
    setState((prev)=>!prev)
    console.log(PlayListMock.playlist)
  }

  const onDeleteData = (idx) =>{
    PlayListMock.playlist.splice(idx,1)
    setState((prev)=>!prev)
    console.log(PlayListMock.playlist,idx)
  }
  console.log(PlayListMock.playlist);
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

  return (
    <>
      <h1>문제1</h1>
        {PlayListMock.playlist.map((musicInfo,idx)=>{
          return(
      <ul>
        <li>
          <h3>{musicInfo.title}</h3>
          <p>{musicInfo.signer}</p>
          <button onClick={()=>{onDeleteData(idx)}}>삭제</button>
          {/*<button onClick={onDeleteData(idx)}>삭제</button> */}
        </li>
      </ul>
        )})}
      <div>
        <p>
          곡명 : <input ref={titleRef}/>
        </p>
        <p>
          가수/작곡 : <input ref={signerRef}/>
        </p>
        <p>
          <button onClick={onAddData}>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;
