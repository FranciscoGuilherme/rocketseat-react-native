import { FilterStatus } from "@/types/FilterStatus"
import { CircleCheck, CircleMinus } from "lucide-react-native"

export function StatusIcon({ status }: { status: FilterStatus }) {
  return status === FilterStatus.DONE ? (
    <CircleCheck size={18} color="#2C46B1" />
  ) : (
    <CircleMinus size={18} color="#000000" />
  )
}
