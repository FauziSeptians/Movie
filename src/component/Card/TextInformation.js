export default function TextInformation({ Key, Value }) {
   console.log(Value);

   return (
      <>
         <div>
            <div className="font-semibold tracking-wide text-[18px]">
               {Key} :
            </div>
            {typeof Value == "string" ? (
               <div className="text-[14px]">{Value}</div>
            ) : (
               <div className="flex gap-3">
                  {Value &&
                     Value.map((el) => {
                        return <div className="text-[14px]">{el.name}</div>;
                     })}
               </div>
            )}
         </div>
      </>
   );
}
