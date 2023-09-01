package org.gradle.accessors.dm;

import org.gradle.api.NonNullApi;
import org.gradle.api.artifacts.MinimalExternalModuleDependency;
import org.gradle.plugin.use.PluginDependency;
import org.gradle.api.artifacts.ExternalModuleDependencyBundle;
import org.gradle.api.artifacts.MutableVersionConstraint;
import org.gradle.api.provider.Provider;
import org.gradle.api.provider.ProviderFactory;
import org.gradle.api.internal.catalog.AbstractExternalDependencyFactory;
import org.gradle.api.internal.catalog.DefaultVersionCatalog;
import java.util.Map;
import javax.inject.Inject;

/**
 * A catalog of dependencies accessible via the `deps` extension.
*/
@NonNullApi
public class LibrariesForDeps extends AbstractExternalDependencyFactory {

    private final AbstractExternalDependencyFactory owner = this;
    private final AccompanistLibraryAccessors laccForAccompanistLibraryAccessors = new AccompanistLibraryAccessors(owner);
    private final AndroidLibraryAccessors laccForAndroidLibraryAccessors = new AndroidLibraryAccessors(owner);
    private final AndroidxLibraryAccessors laccForAndroidxLibraryAccessors = new AndroidxLibraryAccessors(owner);
    private final CountlyLibraryAccessors laccForCountlyLibraryAccessors = new CountlyLibraryAccessors(owner);
    private final DecomposeLibraryAccessors laccForDecomposeLibraryAccessors = new DecomposeLibraryAccessors(owner);
    private final EssentyLibraryAccessors laccForEssentyLibraryAccessors = new EssentyLibraryAccessors(owner);
    private final FuzzyLibraryAccessors laccForFuzzyLibraryAccessors = new FuzzyLibraryAccessors(owner);
    private final I18n4kLibraryAccessors laccForI18n4kLibraryAccessors = new I18n4kLibraryAccessors(owner);
    private final KoinLibraryAccessors laccForKoinLibraryAccessors = new KoinLibraryAccessors(owner);
    private final KotlinLibraryAccessors laccForKotlinLibraryAccessors = new KotlinLibraryAccessors(owner);
    private final KotlinxLibraryAccessors laccForKotlinxLibraryAccessors = new KotlinxLibraryAccessors(owner);
    private final KtlintLibraryAccessors laccForKtlintLibraryAccessors = new KtlintLibraryAccessors(owner);
    private final KtorLibraryAccessors laccForKtorLibraryAccessors = new KtorLibraryAccessors(owner);
    private final LeakLibraryAccessors laccForLeakLibraryAccessors = new LeakLibraryAccessors(owner);
    private final MokoLibraryAccessors laccForMokoLibraryAccessors = new MokoLibraryAccessors(owner);
    private final MosaicLibraryAccessors laccForMosaicLibraryAccessors = new MosaicLibraryAccessors(owner);
    private final MultiplatformLibraryAccessors laccForMultiplatformLibraryAccessors = new MultiplatformLibraryAccessors(owner);
    private final MviKotlinLibraryAccessors laccForMviKotlinLibraryAccessors = new MviKotlinLibraryAccessors(owner);
    private final Slf4jLibraryAccessors laccForSlf4jLibraryAccessors = new Slf4jLibraryAccessors(owner);
    private final SqldelightLibraryAccessors laccForSqldelightLibraryAccessors = new SqldelightLibraryAccessors(owner);
    private final SqliteLibraryAccessors laccForSqliteLibraryAccessors = new SqliteLibraryAccessors(owner);
    private final StatelyLibraryAccessors laccForStatelyLibraryAccessors = new StatelyLibraryAccessors(owner);
    private final StorageLibraryAccessors laccForStorageLibraryAccessors = new StorageLibraryAccessors(owner);
    private final YoutubeLibraryAccessors laccForYoutubeLibraryAccessors = new YoutubeLibraryAccessors(owner);
    private final VersionAccessors vaccForVersionAccessors = new VersionAccessors(providers, config);
    private final BundleAccessors baccForBundleAccessors = new BundleAccessors(providers, config);
    private final PluginAccessors paccForPluginAccessors = new PluginAccessors(providers, config);

    @Inject
    public LibrariesForDeps(DefaultVersionCatalog config, ProviderFactory providers) {
        super(config, providers);
    }

        /**
         * Creates a dependency provider for jaffree (com.github.kokorin.jaffree:jaffree)
         * This dependency was declared in catalog deps.versions.toml
         */
        public Provider<MinimalExternalModuleDependency> getJaffree() { return create("jaffree"); }

        /**
         * Creates a dependency provider for junit (junit:junit)
         * This dependency was declared in catalog deps.versions.toml
         */
        public Provider<MinimalExternalModuleDependency> getJunit() { return create("junit"); }

        /**
         * Creates a dependency provider for kermit (co.touchlab:kermit)
         * This dependency was declared in catalog deps.versions.toml
         */
        public Provider<MinimalExternalModuleDependency> getKermit() { return create("kermit"); }

        /**
         * Creates a dependency provider for mp3agic (com.mpatric:mp3agic)
         * This dependency was declared in catalog deps.versions.toml
         */
        public Provider<MinimalExternalModuleDependency> getMp3agic() { return create("mp3agic"); }

    /**
     * Returns the group of libraries at accompanist
     */
    public AccompanistLibraryAccessors getAccompanist() { return laccForAccompanistLibraryAccessors; }

    /**
     * Returns the group of libraries at android
     */
    public AndroidLibraryAccessors getAndroid() { return laccForAndroidLibraryAccessors; }

    /**
     * Returns the group of libraries at androidx
     */
    public AndroidxLibraryAccessors getAndroidx() { return laccForAndroidxLibraryAccessors; }

    /**
     * Returns the group of libraries at countly
     */
    public CountlyLibraryAccessors getCountly() { return laccForCountlyLibraryAccessors; }

    /**
     * Returns the group of libraries at decompose
     */
    public DecomposeLibraryAccessors getDecompose() { return laccForDecomposeLibraryAccessors; }

    /**
     * Returns the group of libraries at essenty
     */
    public EssentyLibraryAccessors getEssenty() { return laccForEssentyLibraryAccessors; }

    /**
     * Returns the group of libraries at fuzzy
     */
    public FuzzyLibraryAccessors getFuzzy() { return laccForFuzzyLibraryAccessors; }

    /**
     * Returns the group of libraries at i18n4k
     */
    public I18n4kLibraryAccessors getI18n4k() { return laccForI18n4kLibraryAccessors; }

    /**
     * Returns the group of libraries at koin
     */
    public KoinLibraryAccessors getKoin() { return laccForKoinLibraryAccessors; }

    /**
     * Returns the group of libraries at kotlin
     */
    public KotlinLibraryAccessors getKotlin() { return laccForKotlinLibraryAccessors; }

    /**
     * Returns the group of libraries at kotlinx
     */
    public KotlinxLibraryAccessors getKotlinx() { return laccForKotlinxLibraryAccessors; }

    /**
     * Returns the group of libraries at ktlint
     */
    public KtlintLibraryAccessors getKtlint() { return laccForKtlintLibraryAccessors; }

    /**
     * Returns the group of libraries at ktor
     */
    public KtorLibraryAccessors getKtor() { return laccForKtorLibraryAccessors; }

    /**
     * Returns the group of libraries at leak
     */
    public LeakLibraryAccessors getLeak() { return laccForLeakLibraryAccessors; }

    /**
     * Returns the group of libraries at moko
     */
    public MokoLibraryAccessors getMoko() { return laccForMokoLibraryAccessors; }

    /**
     * Returns the group of libraries at mosaic
     */
    public MosaicLibraryAccessors getMosaic() { return laccForMosaicLibraryAccessors; }

    /**
     * Returns the group of libraries at multiplatform
     */
    public MultiplatformLibraryAccessors getMultiplatform() { return laccForMultiplatformLibraryAccessors; }

    /**
     * Returns the group of libraries at mviKotlin
     */
    public MviKotlinLibraryAccessors getMviKotlin() { return laccForMviKotlinLibraryAccessors; }

    /**
     * Returns the group of libraries at slf4j
     */
    public Slf4jLibraryAccessors getSlf4j() { return laccForSlf4jLibraryAccessors; }

    /**
     * Returns the group of libraries at sqldelight
     */
    public SqldelightLibraryAccessors getSqldelight() { return laccForSqldelightLibraryAccessors; }

    /**
     * Returns the group of libraries at sqlite
     */
    public SqliteLibraryAccessors getSqlite() { return laccForSqliteLibraryAccessors; }

    /**
     * Returns the group of libraries at stately
     */
    public StatelyLibraryAccessors getStately() { return laccForStatelyLibraryAccessors; }

    /**
     * Returns the group of libraries at storage
     */
    public StorageLibraryAccessors getStorage() { return laccForStorageLibraryAccessors; }

    /**
     * Returns the group of libraries at youtube
     */
    public YoutubeLibraryAccessors getYoutube() { return laccForYoutubeLibraryAccessors; }

    /**
     * Returns the group of versions at versions
     */
    public VersionAccessors getVersions() { return vaccForVersionAccessors; }

    /**
     * Returns the group of bundles at bundles
     */
    public BundleAccessors getBundles() { return baccForBundleAccessors; }

    /**
     * Returns the group of plugins at plugins
     */
    public PluginAccessors getPlugins() { return paccForPluginAccessors; }

    public static class AccompanistLibraryAccessors extends SubDependencyFactory {

        public AccompanistLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for inset (com.google.accompanist:accompanist-insets)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getInset() { return create("accompanist.inset"); }

    }

    public static class AndroidLibraryAccessors extends SubDependencyFactory {
        private final AndroidAppLibraryAccessors laccForAndroidAppLibraryAccessors = new AndroidAppLibraryAccessors(owner);

        public AndroidLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

        /**
         * Returns the group of libraries at android.app
         */
        public AndroidAppLibraryAccessors getApp() { return laccForAndroidAppLibraryAccessors; }

    }

    public static class AndroidAppLibraryAccessors extends SubDependencyFactory {

        public AndroidAppLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for notifier (com.github.amitbd1508:AppUpdater)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getNotifier() { return create("android.app.notifier"); }

    }

    public static class AndroidxLibraryAccessors extends SubDependencyFactory {
        private final AndroidxGradleLibraryAccessors laccForAndroidxGradleLibraryAccessors = new AndroidxGradleLibraryAccessors(owner);
        private final AndroidxLifecycleLibraryAccessors laccForAndroidxLifecycleLibraryAccessors = new AndroidxLifecycleLibraryAccessors(owner);

        public AndroidxLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for activity (androidx.activity:activity-compose)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getActivity() { return create("androidx.activity"); }

            /**
             * Creates a dependency provider for core (androidx.core:core-ktx)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getCore() { return create("androidx.core"); }

            /**
             * Creates a dependency provider for coroutines (org.jetbrains.kotlinx:kotlinx-coroutines-android)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getCoroutines() { return create("androidx.coroutines"); }

            /**
             * Creates a dependency provider for desugar (com.android.tools:desugar_jdk_libs)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getDesugar() { return create("androidx.desugar"); }

            /**
             * Creates a dependency provider for expresso (androidx.test.espresso:espresso-core)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getExpresso() { return create("androidx.expresso"); }

            /**
             * Creates a dependency provider for junit (androidx.test.ext:junit)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getJunit() { return create("androidx.junit"); }

            /**
             * Creates a dependency provider for palette (androidx.palette:palette-ktx)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getPalette() { return create("androidx.palette"); }

            /**
             * Creates a dependency provider for r8 (com.android.tools:r8)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getR8() { return create("androidx.r8"); }

        /**
         * Returns the group of libraries at androidx.gradle
         */
        public AndroidxGradleLibraryAccessors getGradle() { return laccForAndroidxGradleLibraryAccessors; }

        /**
         * Returns the group of libraries at androidx.lifecycle
         */
        public AndroidxLifecycleLibraryAccessors getLifecycle() { return laccForAndroidxLifecycleLibraryAccessors; }

    }

    public static class AndroidxGradleLibraryAccessors extends SubDependencyFactory {

        public AndroidxGradleLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for plugin (com.android.tools.build:gradle)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getPlugin() { return create("androidx.gradle.plugin"); }

    }

    public static class AndroidxLifecycleLibraryAccessors extends SubDependencyFactory {

        public AndroidxLifecycleLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for common (androidx.lifecycle:lifecycle-common-java8)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getCommon() { return create("androidx.lifecycle.common"); }

            /**
             * Creates a dependency provider for runtime (androidx.lifecycle:lifecycle-runtime-ktx)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getRuntime() { return create("androidx.lifecycle.runtime"); }

            /**
             * Creates a dependency provider for service (androidx.lifecycle:lifecycle-service)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getService() { return create("androidx.lifecycle.service"); }

    }

    public static class CountlyLibraryAccessors extends SubDependencyFactory {

        public CountlyLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for android (ly.count.android:sdk)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getAndroid() { return create("countly.android"); }

            /**
             * Creates a dependency provider for desktop (ly.count.sdk:java)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getDesktop() { return create("countly.desktop"); }

    }

    public static class DecomposeLibraryAccessors extends SubDependencyFactory {
        private final DecomposeExtensionsLibraryAccessors laccForDecomposeExtensionsLibraryAccessors = new DecomposeExtensionsLibraryAccessors(owner);

        public DecomposeLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for dep (com.arkivanov.decompose:decompose)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getDep() { return create("decompose.dep"); }

        /**
         * Returns the group of libraries at decompose.extensions
         */
        public DecomposeExtensionsLibraryAccessors getExtensions() { return laccForDecomposeExtensionsLibraryAccessors; }

    }

    public static class DecomposeExtensionsLibraryAccessors extends SubDependencyFactory {

        public DecomposeExtensionsLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for compose (com.arkivanov.decompose:extensions-compose-jetbrains)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getCompose() { return create("decompose.extensions.compose"); }

    }

    public static class EssentyLibraryAccessors extends SubDependencyFactory {

        public EssentyLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for instanceKeeper (com.arkivanov.essenty:instance-keeper)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getInstanceKeeper() { return create("essenty.instanceKeeper"); }

            /**
             * Creates a dependency provider for lifecycle (com.arkivanov.essenty:lifecycle)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getLifecycle() { return create("essenty.lifecycle"); }

    }

    public static class FuzzyLibraryAccessors extends SubDependencyFactory {

        public FuzzyLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for wuzzy (io.github.shabinder:fuzzywuzzy)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getWuzzy() { return create("fuzzy.wuzzy"); }

    }

    public static class I18n4kLibraryAccessors extends SubDependencyFactory {
        private final I18n4kGradleLibraryAccessors laccForI18n4kGradleLibraryAccessors = new I18n4kGradleLibraryAccessors(owner);

        public I18n4kLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for core (de.comahe.i18n4k:i18n4k-core)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getCore() { return create("i18n4k.core"); }

        /**
         * Returns the group of libraries at i18n4k.gradle
         */
        public I18n4kGradleLibraryAccessors getGradle() { return laccForI18n4kGradleLibraryAccessors; }

    }

    public static class I18n4kGradleLibraryAccessors extends SubDependencyFactory {

        public I18n4kGradleLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for plugin (de.comahe.i18n4k:i18n4k-gradle-plugin)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getPlugin() { return create("i18n4k.gradle.plugin"); }

    }

    public static class KoinLibraryAccessors extends SubDependencyFactory {
        private final KoinAndroidxLibraryAccessors laccForKoinAndroidxLibraryAccessors = new KoinAndroidxLibraryAccessors(owner);

        public KoinLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for android (io.insert-koin:koin-android)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getAndroid() { return create("koin.android"); }

            /**
             * Creates a dependency provider for core (io.insert-koin:koin-core)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getCore() { return create("koin.core"); }

            /**
             * Creates a dependency provider for test (io.insert-koin:koin-test)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getTest() { return create("koin.test"); }

        /**
         * Returns the group of libraries at koin.androidx
         */
        public KoinAndroidxLibraryAccessors getAndroidx() { return laccForKoinAndroidxLibraryAccessors; }

    }

    public static class KoinAndroidxLibraryAccessors extends SubDependencyFactory {

        public KoinAndroidxLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for compose (io.insert-koin:koin-androidx-compose)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getCompose() { return create("koin.androidx.compose"); }

    }

    public static class KotlinLibraryAccessors extends SubDependencyFactory {
        private final KotlinComposeLibraryAccessors laccForKotlinComposeLibraryAccessors = new KotlinComposeLibraryAccessors(owner);
        private final KotlinJsLibraryAccessors laccForKotlinJsLibraryAccessors = new KotlinJsLibraryAccessors(owner);

        public KotlinLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for coroutines (org.jetbrains.kotlinx:kotlinx-coroutines-core)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getCoroutines() { return create("kotlin.coroutines"); }

            /**
             * Creates a dependency provider for kotlinGradlePlugin (org.jetbrains.kotlin:kotlin-gradle-plugin)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getKotlinGradlePlugin() { return create("kotlin.kotlinGradlePlugin"); }

            /**
             * Creates a dependency provider for kotlinTestAnnotationsCommon (org.jetbrains.kotlin:kotlin-test-annotations-common)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getKotlinTestAnnotationsCommon() { return create("kotlin.kotlinTestAnnotationsCommon"); }

            /**
             * Creates a dependency provider for kotlinTestCommon (org.jetbrains.kotlin:kotlin-test-common)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getKotlinTestCommon() { return create("kotlin.kotlinTestCommon"); }

            /**
             * Creates a dependency provider for kotlinTestJs (org.jetbrains.kotlin:kotlin-test-js)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getKotlinTestJs() { return create("kotlin.kotlinTestJs"); }

            /**
             * Creates a dependency provider for kotlinTestJunit (org.jetbrains.kotlin:kotlin-test-junit)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getKotlinTestJunit() { return create("kotlin.kotlinTestJunit"); }

            /**
             * Creates a dependency provider for reflect (org.jetbrains.kotlin:kotlin-reflect)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getReflect() { return create("kotlin.reflect"); }

            /**
             * Creates a dependency provider for serialization (org.jetbrains.kotlin:kotlin-serialization)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getSerialization() { return create("kotlin.serialization"); }

        /**
         * Returns the group of libraries at kotlin.compose
         */
        public KotlinComposeLibraryAccessors getCompose() { return laccForKotlinComposeLibraryAccessors; }

        /**
         * Returns the group of libraries at kotlin.js
         */
        public KotlinJsLibraryAccessors getJs() { return laccForKotlinJsLibraryAccessors; }

    }

    public static class KotlinComposeLibraryAccessors extends SubDependencyFactory {

        public KotlinComposeLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for gradle (org.jetbrains.compose:compose-gradle-plugin)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getGradle() { return create("kotlin.compose.gradle"); }

    }

    public static class KotlinJsLibraryAccessors extends SubDependencyFactory {
        private final KotlinJsWrappersLibraryAccessors laccForKotlinJsWrappersLibraryAccessors = new KotlinJsWrappersLibraryAccessors(owner);

        public KotlinJsLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

        /**
         * Returns the group of libraries at kotlin.js.wrappers
         */
        public KotlinJsWrappersLibraryAccessors getWrappers() { return laccForKotlinJsWrappersLibraryAccessors; }

    }

    public static class KotlinJsWrappersLibraryAccessors extends SubDependencyFactory {

        public KotlinJsWrappersLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for ext (org.jetbrains.kotlin-wrappers:kotlin-extensions)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getExt() { return create("kotlin.js.wrappers.ext"); }

            /**
             * Creates a dependency provider for react (org.jetbrains.kotlin-wrappers:kotlin-react)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getReact() { return create("kotlin.js.wrappers.react"); }

            /**
             * Creates a dependency provider for reactDom (org.jetbrains.kotlin-wrappers:kotlin-react-dom)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getReactDom() { return create("kotlin.js.wrappers.reactDom"); }

            /**
             * Creates a dependency provider for styled (org.jetbrains.kotlin-wrappers:kotlin-styled)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getStyled() { return create("kotlin.js.wrappers.styled"); }

    }

    public static class KotlinxLibraryAccessors extends SubDependencyFactory {
        private final KotlinxSerializationLibraryAccessors laccForKotlinxSerializationLibraryAccessors = new KotlinxSerializationLibraryAccessors(owner);

        public KotlinxLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for atomicfu (org.jetbrains.kotlinx:atomicfu)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getAtomicfu() { return create("kotlinx.atomicfu"); }

            /**
             * Creates a dependency provider for datetime (org.jetbrains.kotlinx:kotlinx-datetime)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getDatetime() { return create("kotlinx.datetime"); }

        /**
         * Returns the group of libraries at kotlinx.serialization
         */
        public KotlinxSerializationLibraryAccessors getSerialization() { return laccForKotlinxSerializationLibraryAccessors; }

    }

    public static class KotlinxSerializationLibraryAccessors extends SubDependencyFactory {

        public KotlinxSerializationLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for json (org.jetbrains.kotlinx:kotlinx-serialization-json)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getJson() { return create("kotlinx.serialization.json"); }

    }

    public static class KtlintLibraryAccessors extends SubDependencyFactory {

        public KtlintLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for gradle (org.jlleitschuh.gradle:ktlint-gradle)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getGradle() { return create("ktlint.gradle"); }

    }

    public static class KtorLibraryAccessors extends SubDependencyFactory {
        private final KtorClientLibraryAccessors laccForKtorClientLibraryAccessors = new KtorClientLibraryAccessors(owner);

        public KtorLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

        /**
         * Returns the group of libraries at ktor.client
         */
        public KtorClientLibraryAccessors getClient() { return laccForKtorClientLibraryAccessors; }

    }

    public static class KtorClientLibraryAccessors extends SubDependencyFactory {

        public KtorClientLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for android (io.ktor:ktor-client-android)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getAndroid() { return create("ktor.client.android"); }

            /**
             * Creates a dependency provider for apache (io.ktor:ktor-client-apache)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getApache() { return create("ktor.client.apache"); }

            /**
             * Creates a dependency provider for auth (io.ktor:ktor-client-auth)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getAuth() { return create("ktor.client.auth"); }

            /**
             * Creates a dependency provider for cio (io.ktor:ktor-client-cio)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getCio() { return create("ktor.client.cio"); }

            /**
             * Creates a dependency provider for core (io.ktor:ktor-client-core)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getCore() { return create("ktor.client.core"); }

            /**
             * Creates a dependency provider for curl (io.ktor:ktor-client-curl)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getCurl() { return create("ktor.client.curl"); }

            /**
             * Creates a dependency provider for ios (io.ktor:ktor-client-ios)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getIos() { return create("ktor.client.ios"); }

            /**
             * Creates a dependency provider for js (io.ktor:ktor-client-js)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getJs() { return create("ktor.client.js"); }

            /**
             * Creates a dependency provider for json (io.ktor:ktor-client-json)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getJson() { return create("ktor.client.json"); }

            /**
             * Creates a dependency provider for logging (io.ktor:ktor-client-logging)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getLogging() { return create("ktor.client.logging"); }

            /**
             * Creates a dependency provider for okhttp (io.ktor:ktor-client-okhttp)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getOkhttp() { return create("ktor.client.okhttp"); }

            /**
             * Creates a dependency provider for serialization (io.ktor:ktor-client-serialization)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getSerialization() { return create("ktor.client.serialization"); }

    }

    public static class LeakLibraryAccessors extends SubDependencyFactory {

        public LeakLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for canary (com.squareup.leakcanary:leakcanary-android)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getCanary() { return create("leak.canary"); }

    }

    public static class MokoLibraryAccessors extends SubDependencyFactory {

        public MokoLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for parcelize (dev.icerock.moko:parcelize)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getParcelize() { return create("moko.parcelize"); }

    }

    public static class MosaicLibraryAccessors extends SubDependencyFactory {

        public MosaicLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for gradle (com.jakewharton.mosaic:mosaic-gradle-plugin)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getGradle() { return create("mosaic.gradle"); }

    }

    public static class MultiplatformLibraryAccessors extends SubDependencyFactory {

        public MultiplatformLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for settings (com.russhwolf:multiplatform-settings-no-arg)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getSettings() { return create("multiplatform.settings"); }

    }

    public static class MviKotlinLibraryAccessors extends SubDependencyFactory {
        private final MviKotlinExtensionsLibraryAccessors laccForMviKotlinExtensionsLibraryAccessors = new MviKotlinExtensionsLibraryAccessors(owner);

        public MviKotlinLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for coroutines (com.arkivanov.mvikotlin:mvikotlin-extensions-coroutines)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getCoroutines() { return create("mviKotlin.coroutines"); }

            /**
             * Creates a dependency provider for dep (com.arkivanov.mvikotlin:mvikotlin)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getDep() { return create("mviKotlin.dep"); }

            /**
             * Creates a dependency provider for keepers (com.arkivanov.mvikotlin:keepers)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getKeepers() { return create("mviKotlin.keepers"); }

            /**
             * Creates a dependency provider for logging (com.arkivanov.mvikotlin:mvikotlin-logging)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getLogging() { return create("mviKotlin.logging"); }

            /**
             * Creates a dependency provider for main (com.arkivanov.mvikotlin:mvikotlin-main)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getMain() { return create("mviKotlin.main"); }

            /**
             * Creates a dependency provider for rx (com.arkivanov.mvikotlin:rx)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getRx() { return create("mviKotlin.rx"); }

            /**
             * Creates a dependency provider for timetravel (com.arkivanov.mvikotlin:mvikotlin-timetravel)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getTimetravel() { return create("mviKotlin.timetravel"); }

        /**
         * Returns the group of libraries at mviKotlin.extensions
         */
        public MviKotlinExtensionsLibraryAccessors getExtensions() { return laccForMviKotlinExtensionsLibraryAccessors; }

    }

    public static class MviKotlinExtensionsLibraryAccessors extends SubDependencyFactory {

        public MviKotlinExtensionsLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for reaktive (com.arkivanov.mvikotlin:mvikotlin-extensions-reaktive)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getReaktive() { return create("mviKotlin.extensions.reaktive"); }

    }

    public static class Slf4jLibraryAccessors extends SubDependencyFactory {

        public Slf4jLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for simple (org.slf4j:slf4j-simple)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getSimple() { return create("slf4j.simple"); }

    }

    public static class SqldelightLibraryAccessors extends SubDependencyFactory {
        private final SqldelightAndroidLibraryAccessors laccForSqldelightAndroidLibraryAccessors = new SqldelightAndroidLibraryAccessors(owner);
        private final SqldelightCoroutinesLibraryAccessors laccForSqldelightCoroutinesLibraryAccessors = new SqldelightCoroutinesLibraryAccessors(owner);
        private final SqldelightGradleLibraryAccessors laccForSqldelightGradleLibraryAccessors = new SqldelightGradleLibraryAccessors(owner);
        private final SqldelightNativeLibraryAccessors laccForSqldelightNativeLibraryAccessors = new SqldelightNativeLibraryAccessors(owner);

        public SqldelightLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for driver (com.squareup.sqldelight:sqlite-driver)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getDriver() { return create("sqldelight.driver"); }

            /**
             * Creates a dependency provider for runtime (com.squareup.sqldelight:runtime)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getRuntime() { return create("sqldelight.runtime"); }

        /**
         * Returns the group of libraries at sqldelight.android
         */
        public SqldelightAndroidLibraryAccessors getAndroid() { return laccForSqldelightAndroidLibraryAccessors; }

        /**
         * Returns the group of libraries at sqldelight.coroutines
         */
        public SqldelightCoroutinesLibraryAccessors getCoroutines() { return laccForSqldelightCoroutinesLibraryAccessors; }

        /**
         * Returns the group of libraries at sqldelight.gradle
         */
        public SqldelightGradleLibraryAccessors getGradle() { return laccForSqldelightGradleLibraryAccessors; }

        /**
         * Returns the group of libraries at sqldelight.native
         */
        public SqldelightNativeLibraryAccessors getNative() { return laccForSqldelightNativeLibraryAccessors; }

    }

    public static class SqldelightAndroidLibraryAccessors extends SubDependencyFactory {

        public SqldelightAndroidLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for driver (com.squareup.sqldelight:android-driver)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getDriver() { return create("sqldelight.android.driver"); }

    }

    public static class SqldelightCoroutinesLibraryAccessors extends SubDependencyFactory {

        public SqldelightCoroutinesLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for extension (com.squareup.sqldelight:coroutines-extensions)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getExtension() { return create("sqldelight.coroutines.extension"); }

    }

    public static class SqldelightGradleLibraryAccessors extends SubDependencyFactory {

        public SqldelightGradleLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for plugin (com.squareup.sqldelight:gradle-plugin)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getPlugin() { return create("sqldelight.gradle.plugin"); }

    }

    public static class SqldelightNativeLibraryAccessors extends SubDependencyFactory {

        public SqldelightNativeLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for driver (com.squareup.sqldelight:native-driver)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getDriver() { return create("sqldelight.native.driver"); }

    }

    public static class SqliteLibraryAccessors extends SubDependencyFactory {
        private final SqliteJdbcLibraryAccessors laccForSqliteJdbcLibraryAccessors = new SqliteJdbcLibraryAccessors(owner);

        public SqliteLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

        /**
         * Returns the group of libraries at sqlite.jdbc
         */
        public SqliteJdbcLibraryAccessors getJdbc() { return laccForSqliteJdbcLibraryAccessors; }

    }

    public static class SqliteJdbcLibraryAccessors extends SubDependencyFactory {

        public SqliteJdbcLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for driver (org.xerial:sqlite-jdbc)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getDriver() { return create("sqlite.jdbc.driver"); }

    }

    public static class StatelyLibraryAccessors extends SubDependencyFactory {
        private final StatelyIsoLibraryAccessors laccForStatelyIsoLibraryAccessors = new StatelyIsoLibraryAccessors(owner);

        public StatelyLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for common (co.touchlab:stately-common)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getCommon() { return create("stately.common"); }

            /**
             * Creates a dependency provider for concurrency (co.touchlab:stately-concurrency)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getConcurrency() { return create("stately.concurrency"); }

            /**
             * Creates a dependency provider for isolate (co.touchlab:stately-isolate)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getIsolate() { return create("stately.isolate"); }

        /**
         * Returns the group of libraries at stately.iso
         */
        public StatelyIsoLibraryAccessors getIso() { return laccForStatelyIsoLibraryAccessors; }

    }

    public static class StatelyIsoLibraryAccessors extends SubDependencyFactory {

        public StatelyIsoLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for collections (co.touchlab:stately-iso-collections)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getCollections() { return create("stately.iso.collections"); }

    }

    public static class StorageLibraryAccessors extends SubDependencyFactory {

        public StorageLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for chooser (com.github.shabinder:storage-chooser)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getChooser() { return create("storage.chooser"); }

    }

    public static class YoutubeLibraryAccessors extends SubDependencyFactory {

        public YoutubeLibraryAccessors(AbstractExternalDependencyFactory owner) { super(owner); }

            /**
             * Creates a dependency provider for downloader (io.github.shabinder:youtube-api-dl)
             * This dependency was declared in catalog deps.versions.toml
             */
            public Provider<MinimalExternalModuleDependency> getDownloader() { return create("youtube.downloader"); }

    }

    public static class VersionAccessors extends VersionFactory  {

        public VersionAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

            /**
             * Returns the version associated to this alias: accompanist (0.22.0-rc)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getAccompanist() { return getVersion("accompanist"); }

            /**
             * Returns the version associated to this alias: androidCoroutines (1.5.1)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getAndroidCoroutines() { return getVersion("androidCoroutines"); }

            /**
             * Returns the version associated to this alias: androidxLifecycle (2.4.0-alpha03)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getAndroidxLifecycle() { return getVersion("androidxLifecycle"); }

            /**
             * Returns the version associated to this alias: decompose (0.5.0)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getDecompose() { return getVersion("decompose"); }

            /**
             * Returns the version associated to this alias: essenty (0.2.2)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getEssenty() { return getVersion("essenty"); }

            /**
             * Returns the version associated to this alias: i18n4k (0.1.3)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getI18n4k() { return getVersion("i18n4k"); }

            /**
             * Returns the version associated to this alias: kermit (0.1.9)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getKermit() { return getVersion("kermit"); }

            /**
             * Returns the version associated to this alias: koin (3.1.2)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getKoin() { return getVersion("koin"); }

            /**
             * Returns the version associated to this alias: kotlin (1.6.10)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getKotlin() { return getVersion("kotlin"); }

            /**
             * Returns the version associated to this alias: kotlinxSerialization (1.3.1)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getKotlinxSerialization() { return getVersion("kotlinxSerialization"); }

            /**
             * Returns the version associated to this alias: ktLint (10.1.0)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getKtLint() { return getVersion("ktLint"); }

            /**
             * Returns the version associated to this alias: ktor (1.6.7)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getKtor() { return getVersion("ktor"); }

            /**
             * Returns the version associated to this alias: mokoParcelize (0.7.1)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getMokoParcelize() { return getVersion("mokoParcelize"); }

            /**
             * Returns the version associated to this alias: mosaic (0.1.0)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getMosaic() { return getVersion("mosaic"); }

            /**
             * Returns the version associated to this alias: multiplatformSettings (0.7.7)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getMultiplatformSettings() { return getVersion("multiplatformSettings"); }

            /**
             * Returns the version associated to this alias: mviKotlin (3.0.0-alpha03)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getMviKotlin() { return getVersion("mviKotlin"); }

            /**
             * Returns the version associated to this alias: slf4j (1.7.31)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getSlf4j() { return getVersion("slf4j"); }

            /**
             * Returns the version associated to this alias: sqlDelight (1.5.3)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getSqlDelight() { return getVersion("sqlDelight"); }

            /**
             * Returns the version associated to this alias: sqliteJdbcDriver (3.34.0)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getSqliteJdbcDriver() { return getVersion("sqliteJdbcDriver"); }

            /**
             * Returns the version associated to this alias: statelyIsoVersion (1.2.1)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getStatelyIsoVersion() { return getVersion("statelyIsoVersion"); }

            /**
             * Returns the version associated to this alias: statelyVersion (1.2.1)
             * If the version is a rich version and that its not expressible as a
             * single version string, then an empty string is returned.
             * This version was declared in catalog deps.versions.toml
             */
            public Provider<String> getStatelyVersion() { return getVersion("statelyVersion"); }

    }

    public static class BundleAccessors extends BundleFactory {
        private final AndroidxBundleAccessors baccForAndroidxBundleAccessors = new AndroidxBundleAccessors(providers, config);
        private final KoinBundleAccessors baccForKoinBundleAccessors = new KoinBundleAccessors(providers, config);
        private final KotlinBundleAccessors baccForKotlinBundleAccessors = new KotlinBundleAccessors(providers, config);

        public BundleAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

            /**
             * Creates a dependency bundle provider for essenty which is an aggregate for the following dependencies:
             * <ul>
             *    <li>com.arkivanov.essenty:lifecycle</li>
             *    <li>com.arkivanov.essenty:instance-keeper</li>
             * </ul>
             * This bundle was declared in catalog deps.versions.toml
             */
            public Provider<ExternalModuleDependencyBundle> getEssenty() { return createBundle("essenty"); }

            /**
             * Creates a dependency bundle provider for kotlinCommon which is an aggregate for the following dependencies:
             * <ul>
             *    <li>org.jetbrains.kotlinx:kotlinx-coroutines-core</li>
             *    <li>org.jetbrains.kotlin:kotlin-serialization</li>
             *    <li>org.jetbrains.kotlinx:kotlinx-serialization-json</li>
             *    <li>org.jetbrains.kotlinx:atomicfu</li>
             * </ul>
             * This bundle was declared in catalog deps.versions.toml
             */
            public Provider<ExternalModuleDependencyBundle> getKotlinCommon() { return createBundle("kotlinCommon"); }

            /**
             * Creates a dependency bundle provider for ktor which is an aggregate for the following dependencies:
             * <ul>
             *    <li>io.ktor:ktor-client-core</li>
             *    <li>io.ktor:ktor-client-json</li>
             *    <li>io.ktor:ktor-client-auth</li>
             *    <li>io.ktor:ktor-client-logging</li>
             *    <li>io.ktor:ktor-client-serialization</li>
             * </ul>
             * This bundle was declared in catalog deps.versions.toml
             */
            public Provider<ExternalModuleDependencyBundle> getKtor() { return createBundle("ktor"); }

            /**
             * Creates a dependency bundle provider for mviKotlin which is an aggregate for the following dependencies:
             * <ul>
             *    <li>com.arkivanov.mvikotlin:mvikotlin</li>
             *    <li>com.arkivanov.mvikotlin:mvikotlin-main</li>
             *    <li>com.arkivanov.mvikotlin:mvikotlin-extensions-coroutines</li>
             *    <li>com.arkivanov.mvikotlin:mvikotlin-logging</li>
             *    <li>com.arkivanov.mvikotlin:mvikotlin-timetravel</li>
             * </ul>
             * This bundle was declared in catalog deps.versions.toml
             */
            public Provider<ExternalModuleDependencyBundle> getMviKotlin() { return createBundle("mviKotlin"); }

            /**
             * Creates a dependency bundle provider for sqldelight which is an aggregate for the following dependencies:
             * <ul>
             *    <li>com.squareup.sqldelight:runtime</li>
             *    <li>com.squareup.sqldelight:coroutines-extensions</li>
             *    <li>com.squareup.sqldelight:sqlite-driver</li>
             * </ul>
             * This bundle was declared in catalog deps.versions.toml
             */
            public Provider<ExternalModuleDependencyBundle> getSqldelight() { return createBundle("sqldelight"); }

            /**
             * Creates a dependency bundle provider for stately which is an aggregate for the following dependencies:
             * <ul>
             *    <li>co.touchlab:stately-common</li>
             *    <li>co.touchlab:stately-concurrency</li>
             *    <li>co.touchlab:stately-isolate</li>
             *    <li>co.touchlab:stately-iso-collections</li>
             * </ul>
             * This bundle was declared in catalog deps.versions.toml
             */
            public Provider<ExternalModuleDependencyBundle> getStately() { return createBundle("stately"); }

        /**
         * Returns the group of bundles at bundles.androidx
         */
        public AndroidxBundleAccessors getAndroidx() { return baccForAndroidxBundleAccessors; }

        /**
         * Returns the group of bundles at bundles.koin
         */
        public KoinBundleAccessors getKoin() { return baccForKoinBundleAccessors; }

        /**
         * Returns the group of bundles at bundles.kotlin
         */
        public KotlinBundleAccessors getKotlin() { return baccForKotlinBundleAccessors; }

    }

    public static class AndroidxBundleAccessors extends BundleFactory {

        public AndroidxBundleAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

            /**
             * Creates a dependency bundle provider for androidx.common which is an aggregate for the following dependencies:
             * <ul>
             *    <li>androidx.activity:activity-compose</li>
             *    <li>androidx.core:core-ktx</li>
             * </ul>
             * This bundle was declared in catalog deps.versions.toml
             */
            public Provider<ExternalModuleDependencyBundle> getCommon() { return createBundle("androidx.common"); }

            /**
             * Creates a dependency bundle provider for androidx.lifecycle which is an aggregate for the following dependencies:
             * <ul>
             *    <li>androidx.lifecycle:lifecycle-service</li>
             *    <li>androidx.lifecycle:lifecycle-common-java8</li>
             *    <li>androidx.lifecycle:lifecycle-runtime-ktx</li>
             * </ul>
             * This bundle was declared in catalog deps.versions.toml
             */
            public Provider<ExternalModuleDependencyBundle> getLifecycle() { return createBundle("androidx.lifecycle"); }

    }

    public static class KoinBundleAccessors extends BundleFactory {

        public KoinBundleAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

            /**
             * Creates a dependency bundle provider for koin.android which is an aggregate for the following dependencies:
             * <ul>
             *    <li>io.insert-koin:koin-androidx-compose</li>
             *    <li>io.insert-koin:koin-android</li>
             * </ul>
             * This bundle was declared in catalog deps.versions.toml
             */
            public Provider<ExternalModuleDependencyBundle> getAndroid() { return createBundle("koin.android"); }

    }

    public static class KotlinBundleAccessors extends BundleFactory {
        private final KotlinJsBundleAccessors baccForKotlinJsBundleAccessors = new KotlinJsBundleAccessors(providers, config);

        public KotlinBundleAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

            /**
             * Creates a dependency bundle provider for kotlin.test which is an aggregate for the following dependencies:
             * <ul>
             *    <li>org.jetbrains.kotlin:kotlin-test-common</li>
             *    <li>org.jetbrains.kotlin:kotlin-test-annotations-common</li>
             * </ul>
             * This bundle was declared in catalog deps.versions.toml
             */
            public Provider<ExternalModuleDependencyBundle> getTest() { return createBundle("kotlin.test"); }

        /**
         * Returns the group of bundles at bundles.kotlin.js
         */
        public KotlinJsBundleAccessors getJs() { return baccForKotlinJsBundleAccessors; }

    }

    public static class KotlinJsBundleAccessors extends BundleFactory {

        public KotlinJsBundleAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

            /**
             * Creates a dependency bundle provider for kotlin.js.wrappers which is an aggregate for the following dependencies:
             * <ul>
             *    <li>org.jetbrains.kotlin-wrappers:kotlin-react</li>
             *    <li>org.jetbrains.kotlin-wrappers:kotlin-react-dom</li>
             *    <li>org.jetbrains.kotlin-wrappers:kotlin-styled</li>
             *    <li>org.jetbrains.kotlin-wrappers:kotlin-extensions</li>
             * </ul>
             * This bundle was declared in catalog deps.versions.toml
             */
            public Provider<ExternalModuleDependencyBundle> getWrappers() { return createBundle("kotlin.js.wrappers"); }

    }

    public static class PluginAccessors extends PluginFactory {

        public PluginAccessors(ProviderFactory providers, DefaultVersionCatalog config) { super(providers, config); }

    }

}
