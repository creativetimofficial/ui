import { CardsActivityGoal } from "@/components/cards/activity-goal"
import SoftwarePurchase01 from "@/registry/creative-tim-ui/blocks/software-purchase-01/page"

export function CardsDemo() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col gap-4">
        <CardsActivityGoal />
      </div>
      <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-2">
        <SoftwarePurchase01 />
      </div>
    </div>
  )
}
