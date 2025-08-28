"use client";

export default function AvatarTextSection() {
  return (
    <div className="flex justify-center">
      <p className="max-w-5xl text-gray-700 text-4xl leading-relaxed">
        Whether you&apos;re aiming to grow your{" "}
        <span className="inline-flex -space-x-2 align-middle mx-2">
          <img
            src="https://media.istockphoto.com/id/1303206558/photo/headshot-portrait-of-smiling-businessman-talk-on-video-call.jpg?s=612x612&w=0&k=20&c=hMJhVHKeTIznZgOKhtlPQEdZqb0lJ5Nekz1A9f8sPV8="
            alt="User1"
            width={24}
            height={32}
            className="rounded-full border-2 border-white"
          />
          <img
            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
            alt="User2"
            width={24}
            height={32}
            className="rounded-full border-2 border-white"
          />
          <img
            src="https://media.istockphoto.com/id/1285124274/photo/middle-age-man-portrait.jpg?s=612x612&w=0&k=20&c=D14m64UChVZyRhAr6MJW3guo7MKQbKvgNVdKmsgQ_1g="
            alt="User3"
            width={24}
            height={32}
            className="rounded-full border-2 border-white"
          />
        </span>{" "}
        audience, identify new opportunities, or improve engagement, our
        dashboard delivers actionable metrics{" "}
        <span className="inline-block relative mx-1">
          <img
            src="https://cdn.pixabay.com/photo/2016/02/01/16/51/ascending-graph-1173935_960_720.png"
            alt="Wave"
            width={40}
            height={20}
            className="inline-block"
          />
        </span>
        that help you <strong>refine your strategy</strong> and achieve lasting
        success.
      </p>
    </div>
  );
}
