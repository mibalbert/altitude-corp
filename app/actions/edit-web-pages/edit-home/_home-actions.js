/**
 * app/actions/edit-web-pages/edit-home
 */

"use server";

import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";

export async function changeHeroTitle(homeId, newTitle) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        heroTitle: newTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeHeroSubtitle(homeId, newSubtitle) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        heroSubtitle: newSubtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeHeroQuote(homeId, newQuote) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        heroQuote: newQuote,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeElevatorTitle(homeId, newElevatorTitle) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        elevatorTitle: newElevatorTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeElevatorSubtitle(homeId, newElevatorSubtitle) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        elevatorSubtitle: newElevatorSubtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeElevatorFirstCompTitle(
  homeId,
  newElevatorFirstCompTitle
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        elevatorFirstCompTitle: newElevatorFirstCompTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeElevatorFirstCompDesc(
  homeId,
  newElevatorFirstCompDesc
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        elevatorFirstCompDesc: newElevatorFirstCompDesc,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeElevatorSecCompTitle(
  homeId,
  newElevatorSecCompTitle
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        elevatorSecCompTitle: newElevatorSecCompTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeElevatorSecCompDesc(
  homeId,
  newElevatorSecCompDesc
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        elevatorSecCompDesc: newElevatorSecCompDesc,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changePeaceOfMindTitle(homeId, newPeaceOfMindTitle) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        peaceOfMindTitle: newPeaceOfMindTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changePeaceOfMindDesc(homeId, newPeaceOfMindDesc) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        peaceOfMindDesc: newPeaceOfMindDesc,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changePeaceOfMindFirstCompTitle(
  homeId,
  newPeaceOfMindFirstCompTitle
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        peaceOfMindFirstCompTitle: newPeaceOfMindFirstCompTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changePeaceOfMindFirstCompDesc(
  homeId,
  newPeaceOfMindFirstCompDesc
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        peaceOfMindFirstCompDesc: newPeaceOfMindFirstCompDesc,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changePeaceOfMindSecCompTitle(
  homeId,
  newPeaceOfMindSecCompTitle
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        peaceOfMindSecCompTitle: newPeaceOfMindSecCompTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changePeaceOfMindSecCompDesc(
  homeId,
  newPeaceOfMindSecCompDesc
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        peaceOfMindSecCompDesc: newPeaceOfMindSecCompDesc,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeNumbersTitle(homeId, newNumbersTitle) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        numbersTitle: newNumbersTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeNumbersDesc(homeId, newNumbersDesc) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        numbersDesc: newNumbersDesc,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeNumbersFirstCompTitle(
  homeId,
  newNumbersFirstCompTitle
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        numbersFirstCompTitle: newNumbersFirstCompTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeNumbersFirstCompNumbers(
  homeId,
  newNumbersFirstCompNumbers
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        numbersFirstCompNumbers: newNumbersFirstCompNumbers,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeNumbersFirstCompDesc(
  homeId,
  newNumbersFirstCompDesc
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        numbersFirstCompDesc: newNumbersFirstCompDesc,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeNumbersSecCompTitle(
  homeId,
  newNumbersSecCompTitle
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        numbersSecCompTitle: newNumbersSecCompTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeNumbersSecCompNumbers(
  homeId,
  newNumbersSecCompNumbers
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        numbersSecCompNumbers: newNumbersSecCompNumbers,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeNumbersSecCompDesc(homeId, newNumbersSecCompDesc) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        numbersSecCompDesc: newNumbersSecCompDesc,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeNumbersThirdCompTitle(
  homeId,
  newNumbersThirdCompTitle
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        numbersThirdCompTitle: newNumbersThirdCompTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeNumbersThirdCompNumbers(
  homeId,
  newNumbersThirdCompNumbers
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        numbersThirdCompNumbers: newNumbersThirdCompNumbers,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeNumbersThirdCompDesc(
  homeId,
  newNumbersThirdCompDesc
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        numbersThirdCompDesc: newNumbersThirdCompDesc,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeStepsTitle(homeId, newStepsTitle) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        stepsTitle: newStepsTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeStepsDesc(homeId, newStepsDesc) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        stepsDesc: newStepsDesc,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeStepsFirstCompTitle(
  homeId,
  newStepsFirstCompTitle
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        stepsFirstCompTitle: newStepsFirstCompTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeStepsFirstCompDesc(homeId, newStepsFirstCompDesc) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        stepsFirstCompDesc: newStepsFirstCompDesc,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeStepsSecCompTitle(homeId, newStepsSecCompTitle) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        stepsSecCompTitle: newStepsSecCompTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeStepsSecCompDesc(homeId, newStepsSecCompDesc) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        stepsSecCompDesc: newStepsSecCompDesc,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeStepsThirdCompTitle(
  homeId,
  newStepsThirdCompTitle
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        stepsThirdCompTitle: newStepsThirdCompTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeStepsThirdCompDesc(homeId, newStepsThirdCompDesc) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        stepsThirdCompDesc: newStepsThirdCompDesc,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeReviewQuote(reviewId, newQuote) {
  try {
    const res = await prisma.review.update({
      where: {
        id: reviewId,
      },
      data: {
        quote: newQuote,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeReviewAuthor(reviewId, newAuthor) {
  try {
    const res = await prisma.review.update({
      where: {
        id: reviewId,
      },
      data: {
        author: newAuthor,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeReviewCompany(reviewId, newCompany) {
  try {
    const res = await prisma.review.update({
      where: {
        id: reviewId,
      },
      data: {
        company: newCompany,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeLandingFooterTitle(homeId, newLandingFooterTitle) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        landingFooterTitle: newLandingFooterTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeLandingFooterDesc(homeId, newLandingFooterDesc) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        landingFooterDesc: newLandingFooterDesc,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeLandingFooterButton(
  homeId,
  newLandingFooterButton
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        landingFooterButton: newLandingFooterButton,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeLandingFooterItem1(homeId, newLandingFooterItem1) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        landingFooterItem1: newLandingFooterItem1,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeLandingFooterItem2(homeId, newLandingFooterItem2) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        landingFooterItem2: newLandingFooterItem2,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeLandingFooterItem3(homeId, newLandingFooterItem3) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        landingFooterItem3: newLandingFooterItem3,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeLandingFooterItem4(homeId, newLandingFooterItem4) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        landingFooterItem4: newLandingFooterItem4,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeLandingFooterItem5(homeId, newLandingFooterItem5) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        landingFooterItem5: newLandingFooterItem5,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeLandingFooterItem6(homeId, newLandingFooterItem6) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        landingFooterItem6: newLandingFooterItem6,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeLandingFooterItem7(homeId, newLandingFooterItem7) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        landingFooterItem7: newLandingFooterItem7,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeLandingFooterItem8(homeId, newLandingFooterItem8) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        landingFooterItem8: newLandingFooterItem8,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeLandingFooterItem9(homeId, newLandingFooterItem9) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        landingFooterItem9: newLandingFooterItem9,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeLandingFooterItem10(
  homeId,
  newLandingFooterItem10
) {
  try {
    const res = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        landingFooterItem10: newLandingFooterItem10,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/home");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

// <div className="absolute  min-w-[40%] h-auto bottom-[10%] left-1/2 transform -translate-x-1/2 -translate-y-[10%] z-[99]">
// <div className="absolute right-3 top-3">
//   {isQuoteChanging ? (
//     <Timer className="h-4 w-4" />
//   ) : (
//     <Check className="h-4 w-4" />
//   )}
// </div>
// <textarea
//   className="peer text-pretty  w-full h-full  bg-transparent text-xl   font-semibold text-center text-gray-200  outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2   px-3 py-2.5 rounded-lg border-blue-gray-200 focus:border-gray-900"
//   defaultValue={data?.heroQuote}
//   onChange={handleQuoteChange}
// />
// </div>
