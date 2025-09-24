"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

interface ProductSelectProps {
  products: { label: string; value: string }[];
}

export function ProductSelect({ products }: ProductSelectProps) {
  const router = useRouter();
  return (
    <Select
      onValueChange={(value) =>
        router.push(`https://www.coway-malaysia.com.my/${value}`)
      }
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a product" />
      </SelectTrigger>
      <SelectContent>
        {/* <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup> */}
        {products.map((product) => (
          <SelectItem key={product.value} value={product.value}>
            {product.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
