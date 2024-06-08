import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Select,
    Option,
  } from "@material-tailwind/react";
  import {
    BanknotesIcon,
    CreditCardIcon,
    LockClosedIcon,
  } from "@heroicons/react/24/solid";
   
 
   


const Biodata = () => {
    const { countries } = useCountries();
  const [type, setType] = React.useState("card");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardExpires, setCardExpires] = React.useState("");
    return (
        <div className="flex ">
            {/* -------------------------------search start---------------------------------- */}
            <div className="w-2/11">
            <Card className="w-full max-w-[24rem]">
      <CardHeader
        color="gray"
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center px-4 py-8 text-center"
      >
        <div className="mb-4 h-20 p-6 text-white">
          {type === "card" ? (
            <CreditCardIcon className="h-10 w-10 text-white" />
          ) : (
            <img alt="paypal " className="w-14 " src="https://docs.material-tailwind.com/icons/paypall.png" />
          )}
        </div>
        <Typography variant="h5" color="white">
          Material Tailwind PRO
        </Typography>
      </CardHeader>
      <CardBody>
        <Tabs value={type} className="overflow-visible">
          <TabsHeader className="relative z-0 ">
            <Tab value="card" onClick={() => setType("card")}>
              Pay with Card
            </Tab>
            <Tab value="paypal" onClick={() => setType("paypal")}>
              Pay with PayPal
            </Tab>
          </TabsHeader>
          <TabsBody
            className="!overflow-x-hidden !overflow-y-visible"
            animate={{
              initial: {
                x: type === "card" ? 400 : -400,
              },
              mount: {
                x: 0,
              },
              unmount: {
                x: type === "card" ? 400 : -400,
              },
            }}
          >
            <TabPanel value="card" className="p-0">
              <form className="mt-12 flex flex-col gap-4">
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Your Email
                  </Typography>
                  <Input
                    type="email"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
 
                <div className="my-3">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium "
                  >
                    Card Details
                  </Typography>
 
                 
                  <div className="my-4 flex items-center gap-4">
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        Expires
                      </Typography>
                      
                    </div>
                    <div>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="mb-2 font-medium"
                      >
                        CVC
                      </Typography>
                      <Input
                        maxLength={4}
                        containerProps={{ className: "min-w-[72px]" }}
                        placeholder="000"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                  </div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Holder Name
                  </Typography>
                  <Input
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <Button size="lg">Pay Now</Button>
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                  secure and encrypted
                </Typography>
              </form>
            </TabPanel>
            <TabPanel value="paypal" className="p-0">
              <form className="mt-12 flex flex-col gap-4">
                <div>
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="mb-4 font-medium"
                  >
                    Personal Details
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Your Email
                  </Typography>
                  <Input
                    type="email"
                    placeholder="name@mail.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
 
                <div className="my-6">
                  <Typography
                    variant="paragraph"
                    color="blue-gray"
                    className="mb-4 font-medium"
                  >
                    Billing Address
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Country
                  </Typography>
                  <Select
                    placeholder="USA"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    menuProps={{ className: "h-48" }}
                  >
                    {countries.map(({ name, flags }) => (
                      <Option key={name} value={name}>
                        <div className="flex items-center gap-x-2">
                          <img
                            src={flags.svg}
                            alt={name}
                            className="h-4 w-4 rounded-full object-cover"
                          />
                          {name}
                        </div>
                      </Option>
                    ))}
                  </Select>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mt-4 -mb-2 font-medium"
                  >
                    Postal Code
                  </Typography>
                  <Input
                    placeholder="0000"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    containerProps={{ className: "mt-4" }}
                  />
                </div>
                <Button size="lg">pay with paypal</Button>
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center justify-center gap-2 font-medium opacity-60"
                >
                  <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                  secure and encrypted
                </Typography>
              </form>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>

            </div>
            {/* -------------------------------------search end---------------------------- */}
            {/* ----------------------------------result--------------- */}
            <div className="flex-1">

            </div>
        </div>
    );
};

export default Biodata;