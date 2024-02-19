/**
 * _faq-actions.js
 */

"use server";

export async function changeFaqPageTitle(faqId, newFaqPageTitle) {
  try {
    const res = await prisma.faqPage.update({
      where: {
        id: faqId,
      },
      data: {
        faqPageTitle: newFaqPageTitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/faq");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeFaqPageSubtitle(faqId, newFaqPageSubtitle) {
  try {
    const res = await prisma.faqPage.update({
      where: {
        id: faqId,
      },
      data: {
        faqPageSubtitle: newFaqPageSubtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/faq");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeFaqPageHelpEmail(faqId, newFaqPageHelpEmail) {
  try {
    const res = await prisma.faqPage.update({
      where: {
        id: faqId,
      },
      data: {
        faqPageHelpEmail: newFaqPageHelpEmail,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/faq");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeFaqPageQuestion1Title(
  faqId,
  newFaqPageQuestion1Title
) {
  try {
    const res = await prisma.faqPage.update({
      where: {
        id: faqId,
      },
      data: {
        faqPageQuestion1Title: newFaqPageQuestion1Title,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/faq");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeFaqPageQuestion2Title(
  faqId,
  newFaqPageQuestion2Title
) {
  try {
    const res = await prisma.faqPage.update({
      where: {
        id: faqId,
      },
      data: {
        faqPageQuestion2Title: newFaqPageQuestion2Title,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/faq");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeFaqPageQuestion3Title(
  faqId,
  newFaqPageQuestion3Title
) {
  try {
    const res = await prisma.faqPage.update({
      where: {
        id: faqId,
      },
      data: {
        faqPageQuestion3Title: newFaqPageQuestion3Title,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/faq");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeFaqPageQuestion4Title(
  faqId,
  newFaqPageQuestion4Title
) {
  try {
    const res = await prisma.faqPage.update({
      where: {
        id: faqId,
      },
      data: {
        faqPageQuestion4Title: newFaqPageQuestion4Title,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/faq");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeFaqPageQuestion5Title(
  faqId,
  newFaqPageQuestion5Title
) {
  try {
    const res = await prisma.faqPage.update({
      where: {
        id: faqId,
      },
      data: {
        faqPageQuestion5Title: newFaqPageQuestion5Title,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/faq");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}

export async function changeFaqPageQuestion1Subtitle(
  faqId,
  newFaqPageQuestion1Subtitle
) {
  try {
    const res = await prisma.faqPage.update({
      where: {
        id: faqId,
      },
      data: {
        faqPageQuestion1Subtitle: newFaqPageQuestion1Subtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/faq");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeFaqPageQuestion2Subtitle(
  faqId,
  newFaqPageQuestion2Subtitle
) {
  try {
    const res = await prisma.faqPage.update({
      where: {
        id: faqId,
      },
      data: {
        faqPageQuestion2Subtitle: newFaqPageQuestion2Subtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/faq");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeFaqPageQuestion3Subtitle(
  faqId,
  newFaqPageQuestion3Subtitle
) {
  try {
    const res = await prisma.faqPage.update({
      where: {
        id: faqId,
      },
      data: {
        faqPageQuestion3Subtitle: newFaqPageQuestion3Subtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/faq");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeFaqPageQuestion4Subtitle(
  faqId,
  newFaqPageQuestion4Subtitle
) {
  try {
    const res = await prisma.faqPage.update({
      where: {
        id: faqId,
      },
      data: {
        faqPageQuestion4Subtitle: newFaqPageQuestion4Subtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/faq");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
export async function changeFaqPageQuestion5Subtitle(
  faqId,
  newFaqPageQuestion5Subtitle
) {
  try {
    const res = await prisma.faqPage.update({
      where: {
        id: faqId,
      },
      data: {
        faqPageQuestion5Subtitle: newFaqPageQuestion5Subtitle,
      },
    });

    if (res) {
      revalidatePath("/admin/edit/faq");
      return { message: "Success", ok: true };
    }

    return { message: "Error", ok: false };
  } catch (error) {
    console.log("the errorr", error);
    return { message: "Error", ok: false };
  }
}
