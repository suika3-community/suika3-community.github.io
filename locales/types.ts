export interface Messages {
  nav: {
    downloads: string;
    docs: string;
    features: string;
    platforms: string;
    philosophy: string;
    lineage: string;
    language: string;
  };

  languages: Record<string, string>;

  hero: {
    tagline: string;
    title1: string;
    title2: string;
    subtitle: string;
    downloadBtn: string;
    docsBtn: string;
    codeLabel: string;
  };

  stats: {
    items: Array<{ value: string; unit: string; label: string }>;
  };

  features: {
    heading: string;
    subheading: string;
    items: Array<{ title: string; description: string }>;
  };

  platforms: {
    heading: string;
    subheading: string;
    groupLabels: string[];
  };

  vnFeatures: {
    heading: string;
    subheading: string;
    vnSectionTitle: string;
    engineSectionTitle: string;
    vnItems: string[];
    engineItems: Array<{ label: string; desc: string }>;
    comingNextTitle: string;
    comingNextText: string;
  };

  philosophy: {
    items: Array<{ title: string; description: string }>;
  };

  lineage: {
    heading: string;
    subheading: string;
    items: Array<{
      period: string;
      title: string;
      description: string;
      highlight: boolean;
    }>;
  };

  footer: {
    tagline: string;
    resources: string;
    community: string;
    download: string;
    documentation: string;
  };

  /**
   * Downloads page.
   * Strings containing {FullZIP}, {Xcode}, {AndroidStudio} are rendered with
   * those terms in bold by the page component.
   */
  downloads: {
    backToHome: string;
    pageTitle: string;
    versionLabel: string;
    licenseNote: string;
    ltsNote: string;
    binaryTitle: string;
    allReleasesPrefix: string;
    allReleasesLink: string;
    allReleasesSuffix: string;
    packagesTitle: string;
    sourceTitle: string;
    cmakeNote: string;
    buildDocsPrefix: string;
    buildDocsLink: string;
    buildDocsSuffix: string;
    platformTitle: string;
    platformText1: string;
    platformText2Prefix: string;
    platformText2Link: string;
    platformText2Suffix: string;
    binaryItems: Array<{ os: string; description: string; label: string }>;
    packageManagers: Array<{ label: string }>;
  };
}
