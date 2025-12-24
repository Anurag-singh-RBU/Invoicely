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
        <AccordionItem value="item-1">
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
        <AccordionItem value="item-2">
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
        <AccordionItem value="item-3">
          <AccordionTrigger>Invoice Details</AccordionTrigger>

          <AccordionContent className="flex flex-col gap-4">
            <form id="form-rhf-demo">
              <FieldGroup>
                <div className="flex gap-6">
                  <DropdownMenu>
                    <div className="flex flex-col">
                      <DropdownMenuLabel>Currency</DropdownMenuLabel>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="border-inputdata-placeholder:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 rounded-md border bg-transparent px-3 h-auto text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 w-fit py-3">
                          <div className="flex sm:gap-8 justify-center items-center">
                            <span className="flex items-center gap-2">
                              {data[0].abbreviation} 
                              <div className="bg-blue-100 py-1 px-2 rounded-sm text-sm font-bold hidden sm:block">
                                {data[0].icon}
                              </div>
                            </span>              
                          <ChevronDown color="black" className="sm:ml-8 ml-2"></ChevronDown>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-auto pr-14">
                        <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}> USD  
                          <div className="bg-blue-100 py-1 px-2 rounded-sm text-sm font-bold hidden sm:block">
                            {data[0].icon}
                          </div>
                        </DropdownMenuCheckboxItem>
                          {data.map((cy) => (

                            <DropdownMenuCheckboxItem key={cy.abbreviation} checked={showPanel} onCheckedChange={setShowPanel}>
                              {cy.abbreviation}
                              <div className="bg-blue-100 py-1 px-2 rounded-sm text-sm font-bold hidden sm:block">
                                {cy.icon}
                              </div>
                            </DropdownMenuCheckboxItem>
                          ))}
                        </DropdownMenuContent>
                    </div>
                  </DropdownMenu>
                  <DropdownMenu>
                    <div className="flex flex-col">
                      <DropdownMenuLabel>Theme</DropdownMenuLabel>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="border-inputdata-placeholder:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex items-center justify-between gap-2 rounded-md border bg-transparent px-3 h-auto text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 w-fit">
                          <div className="flex sm:gap-5 justify-center items-center py-1">
                            <span className="flex items-center gap-2">
                              Light
                            </span>              
                          <ChevronDown color="black" className="sm:ml-8 ml-2"></ChevronDown>
                          </div>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-auto pr-14">
                        <DropdownMenuCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}> Light 
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}> Dark  
                        </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </div>
                  </DropdownMenu>
                  <div className="pt-2">
                  <label className="mb-3 ml-1 font-medium">Theme Color</label>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        border: "1px solid #E2E8F0",
                        borderRadius: 6,
                        paddingLeft: 6,
                        paddingRight: 6,
                        paddingTop: 4,
                        paddingBottom: 4,
                        gap: 4 
                      }}
                      className="w-fit mt-1"
                    >
                      <input
                        type="text"
                        value={color}
                        onChange={handleInputChange}
                        maxLength={7}
                        placeholder="#7246ec"
                        style={{
                          flexGrow: 1,
                          border: "none",
                          outline: "none",
                          fontSize: 14,
                          color: isValidHex(color) ? "black" : "red",
                          fontWeight: 500,
                          marginLeft: 3
                        }}
                        className="placeholder:tracking-wider tracking-wider"
                      />
                      <div
                        style={{
                          position: "relative",
                          width: 36,
                          height: 36,
                          borderRadius: 6,
                          border: "1px solid #E2E8F0",
                          backgroundColor: isValidHex(color) ? color : "#fff",
                          cursor: "pointer",
                          marginLeft: -120
                        }}
                      >
                        <input
                          type="color"
                          value={isValidHex(color) ? color : "#EB5E41"}
                          onChange={e => setColor(e.target.value)}
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 10,
                            bottom: 0,
                            opacity: 0,
                            cursor: "pointer",
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </FieldGroup>
            </form> 
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  

