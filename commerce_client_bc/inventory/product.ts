// export class Price {
//   public constructor(raw: number) {
//     this.raw = raw;
//     this.formattedWithSymbol = `$${raw}`;
//     this.formattedWithCode = `${raw} INR`;
//   }


//   public readonly raw: number;
//   public readonly formattedWithSymbol: string;
//   public readonly formattedWithCode: string;
// }

// export class Discount {
//   public constructor(type: "percentage" | "cash", amount: number) {
//     this.type = type;
//     this.amount = amount;
    
//     switch(type) {
//       case "percentage":
//         this.formatted = `${amount}%`;
//         break;

//       case "cash":
//         this.formatted = `${amount}`;
//         break;

//       default:
//         throw new Error(`Invalid discount type ${type}`);
//     }
//   }


//   public type: "percentage" | "cash";
//   public amount: number;

//   public formatted: string;
// }

// export default class Product {
//   public constructor(args: {
//     id: string, productName: string, brand: string, description: string, arrivalTime: Date, stock: number, originalPrice: number, 
//     discountType: "percentage" | "cash", discountAmount: number, images: string[], videos: string[], variantOf: string | null}
// ) {
//     this.id = args.id;
//     this.productName = args.productName;
//     this.brand = args.brand;
//     this.description = args.description;
//     this.arrivalTime = args.arrivalTime;
//     this.stock = args.stock;
    
//     this.originalPrice = new Price(args.originalPrice);

//     this.discount = new Discount("cash", 50);

//     if(args.discountType == "percentage")
//       this.discountedPrice = new Price(args.originalPrice * args.discountAmount/100);
//     else
//       this.discountedPrice = new Price(args.originalPrice - args.discountAmount);
    
//     this.images = args.images;
//     this.videos = args.videos;
//     this.variantOf = args.variantOf;
//   }  

  
//   public readonly id: string;
  
//   public readonly productName: string;
//   public readonly brand: string;
//   public readonly description: string;

//   public readonly arrivalTime: Date;
//   public readonly stock: number;

//   public readonly originalPrice: Price;

//   public readonly discount: Discount;
//   public readonly discountedPrice: Price;
  
//   public readonly images: string[];
//   public readonly videos: string[];
  
//   public readonly variantOf: string | null;
// }

export type DiscountTypeOptions = "percentage" | "cash";

export class Price {
  public constructor(price: number) {
    this.raw = price;

    this.formattedWithCode = `${price} INR`;
    this.formattedWithSymbol = `$${price}`;
  }


  public readonly raw: number;
  public readonly formattedWithSymbol: string;
  public readonly formattedWithCode: string;
}

export class Discount {
  public constructor(type: DiscountTypeOptions, amount: number) {
    this.type = type;
    this.amount = amount;

    switch(type) {
      case "cash":
        this.formatted = `${amount} INR`;
        break;

      case "percentage":
        this.formatted = `${amount}%`;
        break;

      default:
        throw new Error(`InvalidDiscountTypeError: ${type} is not a valid Discount Type`);
    }
  }  


  public readonly type: DiscountTypeOptions;
  public readonly amount: number;

  public readonly formatted: string;
}

export default class Product {
  public constructor(args: {
    id: string, productName: string, brand: string, description: string, arrivalTime: Date, stock: number, originalPrice: number,
    discountType: DiscountTypeOptions | null, discountAmount: number | null, images: string[], videos: string[], variantOf: string | null
  }) {
    this.id = args.id;

    this.productName = args.productName;
    this.brand = args.brand;
    this.description = args.description;

    this.arrivalTime = args.arrivalTime;
    this.stock = args.stock;

    this.originalPrice = new Price(args.originalPrice);
    
    if(args.discountType != null) {
      this.discount = new Discount(args.discountType, args.discountAmount!);
      
      switch(args.discountType) {
        case "cash":
          this.discountedPrice = new Price(args.originalPrice - args.discountAmount!);
          break;
          
        case "percentage":
          this.discountedPrice = new Price(args.originalPrice * (100 - args.discountAmount!)/100);
          break;

        default:
          throw new Error(`InvalidDiscountTypeError: ${args.discountType} is not a valid Discount Type`);
      }
    }
    else {
      this.discount = null;
      this.discountedPrice = null;
    }

    this.images = args.images;
    this.videos = args.videos;

    this.variantOf = args.variantOf;
  }


  public readonly id: string;
  
  public readonly productName: string;
  public readonly brand: string;
  public readonly description: string;

  public readonly arrivalTime: Date;
  public readonly stock: number;

  public readonly originalPrice: Price;

  public readonly discount: Discount | null;
  public readonly discountedPrice: Price | null;
  
  public readonly images: string[];
  public readonly videos: string[];
  
  public readonly variantOf: string | null;
}