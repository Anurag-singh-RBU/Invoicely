"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ImgSelect from "./(Image Selector)/imgSelect"
import { Controller, useForm } from "react-hook-form"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import data from '@/components/constants/data.json'
import { Calendar22 } from "@/components/ui/date-picker"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogContentContainer,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogHeaderContainer,
  DialogIcon,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/canvas-dialog";
import { BoxPlusIcon } from "@/assets/icons";
  
  export function InvForm() {

    const [color, setColor] = useState("#7246ec");

    const isValidHex = (hex: string) => /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(hex);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      if (val === "" || val[0] !== "#") {
        setColor("#");
        return;
      }
      if (val.length <= 7) {
        setColor(val);
      }
    };

    type Checked = DropdownMenuCheckboxItemProps["checked"]

    const [showStatusBar, setShowStatusBar] = useState<Checked>(true)
    const [showPanel, setShowPanel] = useState<Checked>(false)

    const form = useForm()
    
    return (
      <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
        <AccordionItem value="item-1" className="border-t">
          <AccordionTrigger>Company Details</AccordionTrigger>

          <AccordionContent className="flex flex-col gap-4">
            <div className="flex gap-3">
                <div className="flex flex-col gap-2 w-fit h-fit">
                    <span className="flex items-center gap-2 text-xs leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 py-2 px-1">
                      Company Logo
                    </span>
                    <ImgSelect title="Select Image From Assets" type="logo" allowPreview/>
                </div>
                <div className="flex flex-col gap-2 w-fit h-fit">
                    <span className="flex items-center gap-2 text-xs leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 py-2 px-1">
                      Company Signature
                    </span>
                    <ImgSelect title="Select Image From Assets" type="signature" allowPreview/>
                </div>
            </div>
            <form id="form-rhf-demo">
              <FieldGroup>
                <Controller name="company name" control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel className="text-xs capitalize px-1">
                        Company Name
                      </FieldLabel>
                      <Input {...field} placeholder="Invoicely Ltd" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-8 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive -mt-1"/>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]}/>
                      )}
                    </Field>
                  )}/>
                <Controller name="company address" control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-demo-description" className="text-xs capitalize px-1 -mt-2">
                        Company Address
                      </FieldLabel>
                      <InputGroup className="-mt-1">
                        <InputGroupTextarea {...field} placeholder="123 Main St , Anytown , USA" rows={6} className="border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md bg-transparent px-3 py-2 text-base transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none h-20" 
                        aria-invalid={fieldState.invalid}/>
                        <InputGroupAddon align="block-end">
                          <InputGroupText className="tabular-nums">
                            {field.value?.length ? field.value.length : "0"} / 100 &nbsp;characters
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]}/>
                      )}
                    </Field>
                  )}/>
              </FieldGroup>
            </form>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-t">
          <AccordionTrigger>Client Details</AccordionTrigger>

          <AccordionContent className="flex flex-col gap-4">
            <form id="form-rhf-demo">
              <FieldGroup>
                <Controller name="client name" control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel className="text-xs capitalize px-1">
                        Client Name
                      </FieldLabel>
                      <Input {...field} placeholder="John Doe" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-8 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive -mt-1"/>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]}/>
                      )}
                    </Field>
                  )}/>
                <Controller name="client address" control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-demo-description" className="text-xs capitalize px-1 -mt-2">
                        Client Address
                      </FieldLabel>
                      <InputGroup className="-mt-1">
                        <InputGroupTextarea {...field} placeholder="123 Main St , Anytown , USA" rows={6} className="border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md bg-transparent px-3 py-2 text-base transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none h-20" 
                        aria-invalid={fieldState.invalid}/>
                        <InputGroupAddon align="block-end">
                          <InputGroupText className="tabular-nums">
                            {field.value?.length ? field.value.length : "0"} / 100 &nbsp;characters
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]}/>
                      )}
                    </Field>
                  )}/>
              </FieldGroup>
            </form>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-t">
          <AccordionTrigger>Invoice Details</AccordionTrigger>

          <AccordionContent className="flex flex-col sm:gap-4">
            <form id="form-rhf-demo">
              <FieldGroup>
                <div className="flex flex-col sm:flex-row sm:gap-4 gap-1 w-full">
                  <DropdownMenu>
                    <div className="flex flex-col flex-1 min-w-0">
                      <DropdownMenuLabel className="sm:mb-1">Currency</DropdownMenuLabel>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="outline"
                          className="w-full border-inputdata-placeholder:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-1 rounded-md border bg-transparent px-3 h-auto text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 py-2">
                          <div className="flex items-center justify-between w-full">
                            <span className="flex items-center gap-3">
                              USD
                              <div className="bg-blue-100 py-1 px-2 rounded-sm text-sm font-bold block">
                                us
                              </div>
                            </span>              
                            <ChevronDown color="black" className="ml-2"/>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full sm:min-w-[200px] min-w-[345px]" align="start">
                        <DropdownMenuCheckboxItem checked>
                          USD
                        <div className="bg-blue-100 py-1 px-2 rounded-sm text-sm font-bold block ml-2">
                          us
                        </div>
                        </DropdownMenuCheckboxItem>
                        {data.map((cy) => (
                          <DropdownMenuCheckboxItem key={cy.abbreviation} checked={showPanel} onCheckedChange={setShowPanel}>
                            {cy.abbreviation}
                            <div className="bg-blue-100 py-1 px-2 rounded-sm text-sm font-bold block ml-2">
                              {cy.icon}
                            </div>
                          </DropdownMenuCheckboxItem>
                        ))}
                      </DropdownMenuContent>
                    </div>
                  </DropdownMenu>

                  <DropdownMenu>
                    <div className="flex flex-col flex-1 min-w-0">
                      <DropdownMenuLabel>Theme</DropdownMenuLabel>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="outline"
                          className="w-full border-inputdata-placeholder:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 rounded-md border bg-transparent px-3 h-auto text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 sm:mt-1">
                          <div className="flex items-center justify-between w-full py-1">
                            <span>Light</span>
                            <ChevronDown color="black" className="ml-2"/>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="start" sideOffset={4} className="flex flex-col" style={{ width: "100%", minWidth: 0 }}>
                        <div className="flex flex-col w-full sm:pr-15 pr-65 my-2">
                          <DropdownMenuCheckboxItem className="w-full gap-3 mb-2" style={{ width: "100%" }} checked={showStatusBar} onCheckedChange={setShowStatusBar}>
                            Light
                          </DropdownMenuCheckboxItem>
                          <DropdownMenuCheckboxItem className="w-full" style={{ width: "100%" }} checked={showPanel} onCheckedChange={setShowPanel}>
                            Dark
                          </DropdownMenuCheckboxItem>
                        </div>
                      </DropdownMenuContent>
                    </div>
                  </DropdownMenu>

                  <div className="flex flex-col flex-1 min-w-0 mt-2">
                    <label className="sm:mb-1 ml-1 font-medium">Theme Color</label>
                    <div style={{ display: "flex", alignItems: "center", border: "1px solid #E2E8F0", borderRadius: 6, padding: "4px 6px", gap: 4, width: "100%" }} className="mt-1">
                      <input type="text" value={color} onChange={handleInputChange} maxLength={7} placeholder="#7246ec" style={{ flexGrow: 1, border: "none", outline: "none", fontSize: 14, color: isValidHex(color) ? "black" : "red", fontWeight: 500, marginLeft: 3, minWidth: 0 }} className="placeholder:tracking-wider tracking-wider w-full"/>
                      <div style={{ position: "relative", width: 36, height: 36, borderRadius: 6, border: "1px solid #E2E8F0", backgroundColor: isValidHex(color) ? color : "#fff", cursor: "pointer", marginLeft: 6 }}>
                        <input type="color" value={isValidHex(color) ? color : "#EB5E41"} onChange={e => setColor(e.target.value)} style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0, cursor: "pointer", width: "100%", height: "100%" }}/>
                      </div>
                    </div>
                  </div>
                </div>
                  <div className="flex flex-col sm:flex-row sm:gap-7 gap-3 w-full">
                    <div className="flex flex-col sm:gap-2 gap-1 flex-1">
                      <label className="ml-2 font-medium">Invoice Prefix
                        <span className="inline-flex ml-2 items-center select-none justify-center light:font-medium rounded-sm w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden dark:bg-secondary/80 dark:text-secondary-foreground text-black bg-secondary px-1 text-[10px] py-0.5">optional</span>
                      </label>                      
                        <input
                          type="text"
                          placeholder="Invoice  INV -"
                          className="placeholder:text-muted-foreground flex-1 font-medium border-inputdata-placeholder:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 rounded-md border bg-transparent px-3 h-auto text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 geist-sans"
                          style={{ minWidth: 0 }}/>
                    </div>
                    <div className="flex flex-col sm:gap-2 gap-1 flex-1">
                      <label className="ml-2 font-medium">Serial Number</label>
                        <input
                          type="text"
                          placeholder="0001"
                          className="placeholder:text-muted-foreground py-2 flex-1 font-medium border-inputdata-placeholder:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 rounded-md border bg-transparent px-3 h-auto text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 geist-sans"
                          style={{ minWidth: 0 }}/>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-7 gap-3 w-full">
                    <div className="flex flex-col sm:gap-2 gap-1 flex-1">
                      <Calendar22 title="Invoice Date"></Calendar22>
                    </div>
                    <div className="flex flex-col sm:gap-2 gap-1 flex-1">
                      <Calendar22 title="Due Date"></Calendar22>
                    </div>
                  </div>
                  <Controller name="client name" control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel className="flex gap-2 ml-2 font-medium">
                        Payment terms
                        <span className="inline-flex items-center select-none justify-center light:font-medium rounded-sm w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden dark:bg-secondary/80 dark:text-secondary-foreground text-black bg-secondary px-1 text-[10px] py-0.5">optional</span>
                      </FieldLabel>
                      <Input {...field} placeholder="50% of the total amount upfront" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-8 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive -mt-1 placeholder:tracking-wide"/>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]}/>
                      )}
                    </Field>
                  )}/>
              </FieldGroup>
            </form> 
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-t">
          <AccordionTrigger>Invoice Items</AccordionTrigger>

          <AccordionContent className="flex flex-col sm:gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full flex flex-row items-center justify-center gap-2 py-2 px-4 mt-4 rounded-md border border-dashed border-gray-300 bg-white text-black font-medium hover:bg-gray-100 transition-colors">
                  <BoxPlusIcon/>
                  <span>Add Item</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <form>
                  <DialogHeaderContainer>
                    <DialogIcon>
                      <BoxPlusIcon/>
                    </DialogIcon>
                    <DialogHeader>
                      <DialogTitle>Add Item</DialogTitle>
                      <DialogDescription>Add an item to the invoice</DialogDescription>
                    </DialogHeader>
                  </DialogHeaderContainer>
                  <DialogContentContainer>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="item-name" className="text-sm font-medium ml-1">Item Name</label>
                      <Input id="item-name" name="name" placeholder="Item Name" />
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                      <label htmlFor="item-description" className="text-sm font-medium ml-1">Item Description</label>
                      <Input id="item-description" name="description" placeholder="Item Description" />
                    </div>
                    <div className="flex flex-row gap-4 mt-2">
                      <div className="flex flex-row gap-4 flex-1">
                        <div className="flex flex-col gap-2 flex-1">
                          <label htmlFor="item-quantity" className="text-sm font-medium ml-1">Quantity</label>
                          <Input
                            id="item-quantity"
                            type="number"
                            name="quantity"
                            placeholder="Quantity"/>
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                          <label htmlFor="item-unit-price" className="text-sm font-medium ml-1">Unit Price</label>
                          <Input
                            id="item-unit-price"
                            type="number"
                            name="unitPrice"
                            placeholder="Unit Price"/>
                        </div>
                      </div>
                    </div>
                  </DialogContentContainer>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="button" variant="secondary" className="cursor-pointer select-none inline-flex items-center duration-200 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 px-4 py-2 has-[>svg]:px-2.5">Cancel</Button>
                    </DialogClose>
                    <Button type="submit" className="cursor-pointer select-none inline-flex items-center duration-200 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 button-highlighted-shadow h-8 px-4 py-2 has-[>svg]:px-2.5">Add</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-t">
          <AccordionTrigger className="border-b">Additional Information</AccordionTrigger>

          <AccordionContent className="flex flex-col sm:gap-4 border-b-0">
            <form id="form-rhf-demo">
                <FieldGroup>
                  <Controller name="company address" control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="form-rhf-demo-description" className="text-sm capitalize px-1 mt-2">
                          Notes                         
                          <span className="inline-flex items-center select-none justify-center light:font-medium rounded-sm w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden dark:bg-secondary/80 dark:text-secondary-foreground text-black bg-secondary px-1 text-[10px] py-0.5">optional</span>
                        </FieldLabel>
                        <InputGroup className="-mt-1">
                          <InputGroupTextarea {...field} placeholder="Notes - any relevant information not already covered" rows={6} className="border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md bg-transparent px-3 py-2 text-base transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none h-20" 
                          aria-invalid={fieldState.invalid}/>
                          <InputGroupAddon align="block-end">
                            <InputGroupText className="tabular-nums">
                              {field.value?.length ? field.value.length : "0"} / 100 &nbsp;characters
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]}/>
                        )}
                      </Field>
                    )}/>
                    <Controller name="company address" control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="form-rhf-demo-description" className="text-sm capitalize px-1">
                          Terms
                          <span className="inline-flex items-center select-none justify-center light:font-medium rounded-sm w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden dark:bg-secondary/80 dark:text-secondary-foreground text-black bg-secondary px-1 text-[10px] py-0.5">optional</span>
                        </FieldLabel>
                        <InputGroup className="-mt-1">
                          <InputGroupTextarea {...field} placeholder="Terms & Conditions - late fees , payment methods , delivery terms etc" rows={6} className="border-input placeholder:text-muted-foreground dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md bg-transparent px-3 py-2 text-base transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none h-20" 
                          aria-invalid={fieldState.invalid}/>
                          <InputGroupAddon align="block-end">
                            <InputGroupText className="tabular-nums">
                              {field.value?.length ? field.value.length : "0"} / 100 &nbsp;characters
                            </InputGroupText>
                          </InputGroupAddon>
                        </InputGroup>
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]}/>
                        )}
                      </Field>
                    )}/>
                </FieldGroup>
              </form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }

 