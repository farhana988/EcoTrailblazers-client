/* eslint-disable react/prop-types */

const SubscriptionPlan = ({ subscription }) => {
  const {
    planName,
    status,
    price,
    renewalDate,
    billingCycle,
    trialPeriod,
    benefits,
    usageStats,
    discounts,
    referralInfo,
    customFeatures,
  } = subscription;

  const colorPalette = [
    "bg-blue-100",
    "bg-gray-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-indigo-100",
    "bg-teal-100",
    "bg-red-100",
    "bg-orange-100",
    "bg-lime-100",
    "bg-emerald-100",
    "bg-cyan-100",
    "bg-fuchsia-100",
    "bg-rose-100",
    "bg-amber-100",
    "bg-sky-100",
    "bg-violet-100",
    "bg-zinc-100",
    "bg-stone-100",
  ];

  const randomColor =
    colorPalette[Math.floor(Math.random() * colorPalette.length)];

  return (
    <div className={`p-4 rounded-md shadow-lg flex flex-col ${randomColor}`}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">{planName}</h3>
        <span
          className={`text-xs font-medium px-3 py-1 rounded-full ${
            status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {status}
        </span>
      </div>
      {/* Pricing */}
      <div className="mt-2 border-t pt-2">
        <h4 className="text-lg font-semibold text-gray-900">{price}</h4>
        <p className="text-sm text-gray-500">
          {billingCycle} • Renews on {renewalDate}
        </p>
        {trialPeriod && (
          <p className="text-xs text-blue-500 mt-1">
            {trialPeriod} trial available
          </p>
        )}
      </div>

      {/* Benefits */}
      <div className="mt-2">
        <h4 className="font-medium text-sm border-b">Benefits:</h4>
        <ul className="list-disc pl-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-xs text-gray-700">
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Usage Stats */}
      <div className="mt-2">
        <h4 className="font-medium text-sm">Usage Stats:</h4>
        <ul className="text-xs text-gray-600">
          <li>Storage Used: {usageStats.storageUsed}</li>
          <li>Data Limit: {usageStats.dataLimit}</li>
          <li>Devices Linked: {usageStats.devicesLinked}</li>
          <li>Video Hours Watched: {usageStats.videoHoursWatched}</li>
        </ul>
      </div>

      {/* Discount */}
      {discounts && discounts.length > 0 && (
        <div className="mt-2">
          <h4 className="font-medium text-sm">Discounts:</h4>
          <ul className="space-y-2 text-xs text-gray-600">
            {discounts.map((discount, index) => (
              <li key={index}>
                <span className="font-semibold">{discount.discountCode}</span>:{" "}
                {discount.amountOff} off - Valid until {discount.validUntil}
                <p className="text-xs text-gray-500">{discount.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Referral Info */}
      {referralInfo && (
        <div className="mt-2">
          <h4 className="font-medium text-sm">Referral Info:</h4>
          <ul className="text-xs text-gray-600">
            <li>Referral Code: {referralInfo.referralCode}</li>
            <li>Referred Users: {referralInfo.referredUsers}</li>
            <li>Bonus Earned: {referralInfo.bonusEarned}</li>
            <li>
              Last Referred User: {referralInfo.lastReferredUser || "N/A"}
            </li>
          </ul>
        </div>
      )}

      {/* Custom Features */}
      <div className="mt-2 flex-grow">
        <h4 className="font-medium text-sm">Custom Features:</h4>
        <ul className="text-xs text-gray-600">
          <li>Theme: {customFeatures.customTheme}</li>
          <li>
            Personalized Recommendations:{" "}
            {customFeatures.personalizedRecommendations
              ? "Enabled"
              : "Disabled"}
          </li>
          <li>
            Priority Support: {customFeatures.prioritySupport ? "Yes" : "No"}
          </li>
        </ul>
      </div>
      <div className="mt-2 flex justify-end">
        <button className="btn btn-sm bg-primary text-white text-sm">
          Buy this plan
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPlan;
