// 映射类型
// 将对象映射成想要的结果
interface Obj{
  a: string;
  b: number;
  c: boolean;
}

type ReadonlyObj = Readonly<Obj> // 只读

type PartialObj = Partial<Obj> // 可选

type PickObj = Pick<Obj, 'a' | 'b'> // 抽取 抽取obj的子集

type RecordObj = Record<'x' | 'y', Obj> // 新增

export {}