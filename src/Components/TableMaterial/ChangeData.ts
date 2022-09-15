
export const changeData: (
    data:any[],
    tri:string|null
    )=>any[] = (data,tri)=>{
        if (tri=="title") {
            data.sort((a,b)=>{
                if (a[tri]<b[tri])
                return -1;
             if (a[tri]>b[tri])
                return 1;
             return 0;
            })
        }
    return data;
};
