/**
 * _services_actions.js
 */

"use server";

import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";

export async function changeServicesPageHeroTitle(
  servicesPageId,
  newServicesPageHeroTitle
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageHeroTitle: newServicesPageHeroTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeServicesPageHeroSubtitle(
  servicesPageId,
  newServicesPageHeroSubtitle
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageHeroSubtitle: newServicesPageHeroSubtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeServicesPageLetUsHelpTitle(
  servicesPageId,
  newServicesPageLetUsHelpTitle
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageLetUsHelpTitle: newServicesPageLetUsHelpTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageLetUsHelpSubtitle(
  servicesPageId,
  newServicesPageLetUsHelpSubtitle
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageLetUsHelpSubtitle: newServicesPageLetUsHelpSubtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageLetUsHelpService1Title(
  servicesPageId,
  newServicesPageLetUsHelpService1Title
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageLetUsHelpService1Title:
          newServicesPageLetUsHelpService1Title,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageLetUsHelpService2Title(
  servicesPageId,
  newServicesPageLetUsHelpService2Title
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageLetUsHelpService2Title:
          newServicesPageLetUsHelpService2Title,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeServicesPageLetUsHelpService3Title(
  servicesPageId,
  newServicesPageLetUsHelpService3Title
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageLetUsHelpService3Title:
          newServicesPageLetUsHelpService3Title,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeServicesPageLetUsHelpService1Desc(
  servicesPageId,
  newServicesPageLetUsHelpService1Desc
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageLetUsHelpService1Desc: newServicesPageLetUsHelpService1Desc,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageLetUsHelpService2Desc(
  servicesPageId,
  newServicesPageLetUsHelpService2Desc
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageLetUsHelpService2Desc: newServicesPageLetUsHelpService2Desc,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageLetUsHelpService3Desc(
  servicesPageId,
  newServicesPageLetUsHelpService3Desc
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageLetUsHelpService3Desc: newServicesPageLetUsHelpService3Desc,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeServicesPageStepsBadge(
  servicesPageId,
  newServicesPageStepsBadge
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageStepsBadge: newServicesPageStepsBadge,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeServicesPageStepsTitle(
  servicesPageId,
  newServicesPageStepsTitle
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageStepsTitle: newServicesPageStepsTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeServicesPageSteps1Title(
  servicesPageId,
  newServicesPageSteps1Title
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageSteps1Title: newServicesPageSteps1Title,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageSteps2Title(
  servicesPageId,
  newServicesPageSteps2Title
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageSteps2Title: newServicesPageSteps2Title,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageSteps3Title(
  servicesPageId,
  newServicesPageSteps3Title
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageSteps3Title: newServicesPageSteps3Title,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageSteps4Title(
  servicesPageId,
  newServicesPageSteps4Title
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageSteps4Title: newServicesPageSteps4Title,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageSteps5Title(
  servicesPageId,
  newServicesPageSteps5Title
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageSteps5Title: newServicesPageSteps5Title,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageSteps1Subtitle(
  servicesPageId,
  newServicesPageSteps1Subtitle
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageSteps1Subtitle: newServicesPageSteps1Subtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageSteps2Subtitle(
  servicesPageId,
  newServicesPageSteps2Subtitle
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageSteps2Subtitle: newServicesPageSteps2Subtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageSteps3Subtitle(
  servicesPageId,
  newServicesPageSteps3Subtitle
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageSteps3Subtitle: newServicesPageSteps3Subtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageSteps4Subtitle(
  servicesPageId,
  newServicesPageSteps4Subtitle
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageSteps4Subtitle: newServicesPageSteps4Subtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageSteps5Subtitle(
  servicesPageId,
  newServicesPageSteps5Subtitle
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageSteps5Subtitle: newServicesPageSteps5Subtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageSteps1Badge(
  servicesPageId,
  newServicesPageSteps1Badge
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageSteps1Badge: newServicesPageSteps1Badge,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageSteps2Badge(
  servicesPageId,
  newServicesPageSteps2Badge
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageSteps2Badge: newServicesPageSteps2Badge,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageSteps3Badge(
  servicesPageId,
  newServicesPageSteps3Badge
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageSteps3Badge: newServicesPageSteps3Badge,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageSteps4Badge(
  servicesPageId,
  newServicesPageSteps4Badge
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageSteps4Badge: newServicesPageSteps4Badge,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageSteps5Badge(
  servicesPageId,
  newServicesPageSteps5Badge
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageSteps5Badge: newServicesPageSteps5Badge,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeServicesPageContactUsTitle(
  servicesPageId,
  newServicesPageContactUsTitle
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageContactUsTitle: newServicesPageContactUsTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageContactUsSubtitle(
  servicesPageId,
  newServicesPageContactUsSubtitle
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageContactUsSubtitle: newServicesPageContactUsSubtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageContactUsMinTitle(
  servicesPageId,
  newServicesPageContactUsMinTitle
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageContactUsMinTitle: newServicesPageContactUsMinTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeServicesPageContactUsMinSubtitle(
  servicesPageId,
  newServicesPageContactUsMinSubtitle
) {
  try {
    const res = await prisma.servicesPage.update({
      where: {
        id: servicesPageId,
      },
      data: {
        servicesPageContactUsMinSubtitle: newServicesPageContactUsMinSubtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/services");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
